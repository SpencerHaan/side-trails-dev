import * as React from "react"
import Accordion from "../components/Accordion"
import Card from "../components/Card"
import Section from "../components/Section"

import {
  TbChartBar as CostIcon,
  TbTelescope as LongTermIcon,
  TbBrain as DeepUnderstandingIcon,
  TbScale as TradeOffsIcon,
} from "react-icons/tb"
import { IconType } from "react-icons"

const Summary = ({ value, icon: Icon }: { value: string, icon: IconType }) => {
  return (
    <div className="flex flex-row gap-3 md:gap-4 items-center min-h-[72px]">
      <div className="flex flex-col text-center justify-center w-7 h-7 lg:w-10 lg:h-10 p-1 lg:p-2 rounded-lg lg:rounded-xl font-extrabold bg-zinc-500 text-zinc-50">
        <Icon className="h-full w-full"/>
      </div>
      <div className="flex flex-col flex-1 justify-center text-sm md:text-lg xl:text-xl text-center md:text-left">
        {value}
      </div>
    </div>
  )
}

const AboutMeSection = () => {
  return (
    <Section.Item heading={{
      title: "About Me",
      subtitle: ["\"The unexamined life is not worth living.\"", "Socrates"]
    }}>
      <Card heading="Values">
        <Accordion>
          <Accordion.Item summary={<Summary value="Results over cost and deadlines" icon={CostIcon}/>}>
          </Accordion.Item>
          <Accordion.Item summary={<Summary value="Building for the long-term over the short-term" icon={LongTermIcon}/>}>
          </Accordion.Item>
          <Accordion.Item summary={<Summary value="Deeply understand the problem, then find the solution" icon={DeepUnderstandingIcon}/>}>
          </Accordion.Item>
          <Accordion.Item summary={<Summary value="Consider incentives and tradeoffs, not just solutions" icon={TradeOffsIcon}/>}>
          </Accordion.Item>
        </Accordion>
      </Card>
    </Section.Item>
  )
}

export default AboutMeSection