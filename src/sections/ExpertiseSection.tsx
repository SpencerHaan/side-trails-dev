import * as React from "react"
import { IconType } from "react-icons"
import { Content, RoundGlyph, Section } from "../components"
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

const Item = ({title, icon, children}: ExpertiseProperties) => {
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
      <Content className="flex-1 min-w-full sm:min-w-[640px] md:min-w-[128px] md:min-h-[100px] text-center">
        <h4>{title}</h4>
        <p>{children}</p>
      </Content>
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
          <Item
            key={e.id}
            title={e.title}
            icon={{
              type: e.icon,
              orientation: i % 2 === 0 ? Orientation.Horizontal.Left : Orientation.Horizontal.Right
            }}
          >
            {e.body}
          </Item>
        ))}
      </div>
    </Section.Item>
  )
}

export default ExpertiseSection