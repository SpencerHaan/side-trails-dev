import * as React from "react"
import {
  FaMicroscope as AnalysisIcon,
  FaCompassDrafting as ArchitectureIcon,
  FaMap as PrototypeIcon,
  FaCode as DevelopmentIcon,
  FaCloud as CloudIcon,
} from "react-icons/fa6"
import {
  BiSolidBackpack as RucksackIcon
} from "react-icons/bi"
import { IconBaseProps } from "react-icons"
import { Icon, Section } from "../components"
import { HorizontalOrientation } from "../utilities/HorizontalOrientation"

interface ExpertiseProperties {
  title: string
  iconType: React.ElementType<IconBaseProps>
  iconOrientation: HorizontalOrientation
  children: string
}

const Tile = ({title, iconType, iconOrientation, children}: ExpertiseProperties) => {
  return (
    <div
      className={
        `flex ${iconOrientation === HorizontalOrientation.Left ? "flex-wrap" : "flex-wrap-reverse"} justify-center
        min-w-full md:min-w-[45%] gap-4 flex-1`
    }
    >
      {iconOrientation === HorizontalOrientation.Left
        ? <div className="flex flex-col justify-center"><Icon type={iconType}/></div>
        : null
      }
      <div className="flex flex-col flex-1 min-w-full sm:min-w-[640px] md:min-w-[128px] md:min-h-[100px] text-center gap-2">
        <div className="text-base xl:text-lg text-zinc-500">
          {title}
        </div>
        <div className="text-sm xl:text-base">
          {children}
        </div>
      </div>
      {iconOrientation === HorizontalOrientation.Right
        ? <div className="flex flex-col justify-center"><Icon type={iconType}/></div>
        : null
      }
    </div>
  )
}

const ExpertiseSection = () => {
  return (
    <Section.Item
      heading={{ title: "Expertise", subtitle:"Some of the things I can do." }}
    >
      <div className="flex flex-wrap justify-center gap-4">
        <Tile title="System Anaylsis" iconType={AnalysisIcon} iconOrientation={HorizontalOrientation.Left}>
          Develop an understanding of the breadth and depth of your system, and the relationships and interactions between the various parts.
        </Tile>
        <Tile title="System Architecture" iconType={ArchitectureIcon} iconOrientation={HorizontalOrientation.Right}>
          Design solutions that incorporate and consider all aspects of a system.
        </Tile>
        <Tile title="Software Prototyping" iconType={PrototypeIcon} iconOrientation={HorizontalOrientation.Left}>
          Exploratory software development to better understand the solution you want, and need.
        </Tile>
        <Tile title="Software Design and Development" iconType={DevelopmentIcon} iconOrientation={HorizontalOrientation.Right}>
          Implement well-designed code and abstractions to enable future growth while reducing maintenance and development overhead.
        </Tile>
        <Tile title="Cloud Integration" iconType={CloudIcon} iconOrientation={HorizontalOrientation.Left}>
          Introduce new cloud services into existing systems or processes, or migrate existing non-cloud systems to the cloud.
        </Tile>
        <Tile title="Rucksack" iconType={RucksackIcon} iconOrientation={HorizontalOrientation.Right}>
          Java, JavaScript/TypeScript, React, MySQL/SQL, AWS, and more…
        </Tile>
      </div>
    </Section.Item>
  )
}

export default ExpertiseSection