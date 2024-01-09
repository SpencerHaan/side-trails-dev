import * as React from "react"
import { IconType } from "react-icons"
import { RoundGlyph, Section } from "../components"
import { Orientation } from "../utilities"
import { useExpertise } from "../data/Expertise"

interface ExpertiseProperties {
  title: string
  icon: {
    type: IconType,
    orientation: Orientation.Horizontal
  }
  children: string
}

const Tile = ({title, icon, children}: ExpertiseProperties) => {
  return (
    <div
      className={
        `flex ${icon.orientation === Orientation.Horizontal.Left ? "flex-wrap" : "flex-wrap-reverse"} justify-center
        min-w-full md:min-w-[45%] gap-4 flex-1`
    }
    >
      {icon.orientation === Orientation.Horizontal.Left
        ? <div className="flex flex-col justify-center"><RoundGlyph iconType={icon.type}/></div>
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
      {icon.orientation === Orientation.Horizontal.Right
        ? <div className="flex flex-col justify-center"><RoundGlyph iconType={icon.type}/></div>
        : null
      }
    </div>
  )
}

const ExpertiseSection = () => {
  const expertise = useExpertise()

  return (
    <Section.Item
      heading={{ title: "Expertise", subtitle:"Some of the things I can do." }}
    >
      <div className="flex flex-wrap justify-center gap-4">
        {expertise.map((e, i) => (
          <Tile
            key={e.id}
            title={e.title}
            icon={{
              type: e.icon,
              orientation: i % 2 === 0 ? Orientation.Horizontal.Left : Orientation.Horizontal.Right
            }}
          >
            {e.body}
          </Tile>
        ))}
      </div>
    </Section.Item>
  )
}

export default ExpertiseSection