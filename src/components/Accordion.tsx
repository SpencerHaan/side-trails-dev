import * as React from "react"
import {
  TbSquareRoundedChevronUpFilled as UpArrow,
  TbSquareRoundedChevronDownFilled as DownArrow,
} from "react-icons/tb"
import Collapsible from "./Collapsible"

interface AccordionProperties {
  summary: string | React.ReactElement
  children?: string | React.ReactElement | React.ReactElement[]
}

const Accordion = ({summary, children}: AccordionProperties) => {
  const [expand, setExpand] = React.useState(false)

  const clickHandler = () => setExpand(!expand)

  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <div className="flex flex-row gap-2" onClick={clickHandler}>
        <div className="flex-1 md:text-xl">
          {summary}
        </div>
        <div className="m-auto text-2xl md:text-3xl text-zinc-600 cursor-pointer transition-transform duration-200">
          {expand
            ? <UpArrow/>
            : <DownArrow/>
          }
        </div>
      </div>
      <Collapsible expand={expand}>
        <div className="p-2 text-sm md:text-base">
          {children}
        </div>
      </Collapsible>
    </div>
  )
}

export default Accordion