import * as React from "react"

enum State {
  Collapsed,
  Collapsing,
  Expanded,
  Expanding
}

interface CollapsibleProperties {
  expand?: boolean
  onChange?: (expanded: boolean) => void
  children?: string | React.ReactElement | React.ReactElement[] | null
}

const Collapsible = ({ expand = false, onChange = () => {}, children }: CollapsibleProperties) => {
  const [state, setState] = React.useState(State.Collapsed)
  const [contentHeight, setContentHeight] = React.useState(0)
  const contentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const resizeHandler = () => {
      if (state === State.Expanded) {
        setContentHeight(contentRef.current?.scrollHeight || 0)
      }
    }
    window.addEventListener("resize", resizeHandler)
    return () => window.removeEventListener("resize", resizeHandler)
  })

  React.useEffect(() => {
    const content = contentRef.current
    if (!content) {
      return
    }

    if (expand) {
      content.hidden = false
      setState(State.Expanding)
      setContentHeight(content.scrollHeight)
    } else {
      setState(State.Collapsing)
      setContentHeight(0)
    }
  }, [expand])

  const transitionEndHandler = (event: React.TransitionEvent<HTMLDivElement>) => {
    const content = contentRef.current
    if (!content || content !== event.currentTarget) {
      return
    }

    switch(state) {
      case State.Collapsing:
        content.hidden = true
        setState(State.Collapsed)
        onChange(false)
        break
      case State.Expanding:
        setState(State.Expanded)
        onChange(true)
        break
    }
  }

  return (
    <div
      ref={contentRef}
      onTransitionEnd={transitionEndHandler}
      className="overflow-hidden transition-all duration-200 ease-in-out"
      style={{maxHeight: `${contentHeight}px`}}
      hidden
    >
      {children}
    </div>
  )
}

export default Collapsible