import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Content } from "../components"

const WhySideTrailsSection = () => {
  return (
    <Section.Item heading={{
      title: "Why Side Trails?",
      subtitle: ["\"We cannot solve our problems with the same thinking we used when we created them.\"", "Albert Einstein"]
    }}>
      <Content>
        <div className="text-center mb-4 lg:float-right lg:ml-8">
          <StaticImage src="../images/why-side-trails.jpeg" alt="" className="-mx-3 h-60 md:mx-0 md:h-80 xl:w-96 xl:h-96 md:rounded-xl"/>
        </div>
        <p>
          During hikes with my friends, we often come across side trails and every time we do I wonder where it’ll take us and what we’ll see. These side trails are more dangerous and less groomed, but are also more interesting and less travelled. I enjoy going down these side trails every opportunity I get. I’m an explorer.
        </p>
        <p>
          This mindset reflects how I solve problems.
        </p>
        <p>
          If the status quo is the main trail, the side trails represent the unconventional and unorthodox. Often it makes sense to stick with the status quo, and solve problems within it. Exploration beyond this establishes confidence in that approach, while ensuring that better solutions aren’t missed.
        </p>
      </Content>
    </Section.Item>
  )
}

export default WhySideTrailsSection