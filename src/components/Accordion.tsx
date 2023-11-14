import * as React from "react"
import { IconType } from "react-icons"
import {
  TbSquareRoundedChevronUpFilled as UpArrow,
  TbSquareRoundedChevronDownFilled as DownArrow,
} from "react-icons/tb"

enum Phase {
  Collapsed,
  Collapsing,
  Expanded,
  Expanding
}

interface AccordionProperties {
  summary: string | React.ReactElement
  children?: string | React.ReactElement | React.ReactElement[]
}

const Accordion = ({summary, children}: AccordionProperties) => {
  const [phase, setPhase] = React.useState(Phase.Collapsed)
  const [contentHeight, setContentHeight] = React.useState(0)
  const contentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const resizeHandler = () => {
      if (phase === Phase.Expanded) {
        setContentHeight(contentRef.current?.scrollHeight || 0)
      }
    }
    window.addEventListener("resize", resizeHandler)
    return () => window.removeEventListener("resize", resizeHandler)
  })
  
  const clickHandler = () => {
    const content = contentRef.current
    if (!content) {
      return
    }

    switch(phase) {
      case Phase.Collapsed:
        content.hidden = false
        setPhase(Phase.Expanding)
        setContentHeight(content.scrollHeight)
        break
      case Phase.Expanded:
        setPhase(Phase.Collapsing)
        setContentHeight(0)
        break
    }
  }

  const transitionEndHandler = (event: React.TransitionEvent<HTMLDivElement>) => {
    const content = contentRef.current
    if (!content || content !== event.currentTarget) {
      return
    }

    switch(phase) {
      case Phase.Collapsing:
        content.hidden = true
        setPhase(Phase.Collapsed)
        break
      case Phase.Expanding:
        setPhase(Phase.Expanded)
        break
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2" onClick={clickHandler}>
        <div className="flex-1 text-xl">
          {summary}
        </div>
        <div className="m-auto text-3xl cursor-pointer transition-transform duration-200">
          {phase === Phase.Expanding || phase === Phase.Expanded
            ? <UpArrow/>
            : <DownArrow/>
          }
        </div>
      </div>
      <div
        ref={contentRef}
        onTransitionEnd={transitionEndHandler}
        className="overflow-hidden transition-all duration-200 ease-in-out"
        style={{maxHeight: `${contentHeight}px`}}
        hidden
      >
        <div className="p-2 text-justify text-base bg-zinc-200 rounded-b-xl shadow-inner">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion