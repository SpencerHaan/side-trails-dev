import * as React from "react"
import Collapsible from "./Collapsible"
import Icons from "../utilities/Icons"

interface ItemProperties {
  summary: string | React.ReactElement
  children?: string | React.ReactElement | React.ReactElement[]
}

const Item = (_props: ItemProperties) => null

interface RowProperties extends ItemProperties {
  expanded: boolean
  onClick: () => void
}

const Row = ({ expanded, onClick, summary, children }: RowProperties) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-2" onClick={onClick}>
        <div className="flex-1 md:text-xl">
          {summary}
        </div>
        <div className="m-auto text-2xl md:text-3xl text-zinc-300 cursor-pointer transition-transform duration-200">
          {expanded
            ? <Icons.collapse/>
            : <Icons.expand/>
          }
        </div>
      </div>
      <Collapsible expanded={expanded}>
        <div className="p-2 text-sm md:text-base">
          {children}
        </div>
      </Collapsible>
    </div>
  )
}

interface AccordionProperties {
  children?: React.ReactElement<ItemProperties>| React.ReactElement<ItemProperties>[]
}

const Accordion = ({ children = [] }: AccordionProperties) => {
  children = Array.isArray(children) ? children : [children]
  
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null)

  const isExpanded = (index: number) => {
    return index === expandedIndex
  }
  const clickHandler = (index: number) => {
    if (index === expandedIndex) {
      setExpandedIndex(null)
    } else {
      setExpandedIndex(index)
    }
  }
  return (
    <div className="flex flex-col gap-1">
      {children.map((child, i) => <Row key={i} expanded={isExpanded(i)} onClick={() => clickHandler(i)} {...child.props}/>)}
    </div>
  )
}

Accordion.Item = Item

export default Accordion