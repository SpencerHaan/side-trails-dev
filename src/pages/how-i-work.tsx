import * as React from "react"
import { type HeadFC } from "gatsby"
import Section from "../components/Section"
import AgileSection from "../sections/AgileSection"
import AboutMeSection from "../sections/AboutMeSection"
import Content from "../components/Content"
import { StaticImage } from "gatsby-plugin-image"

const HowIWorkPage = () => {
    return (
    <Section.List>
      <AboutMeSection/>
      <Section.Item heading={{
        title: "Why Side Trails?",
        subtitle: ["\"We cannot solve our problems with the same thinking we used when we created them.\"", "Albert Einstein"]
      }}>
        <Content>
          <div className="text-center mb-4 lg:float-right lg:ml-8">
            <StaticImage src="../images/why-side-trails.jpeg" alt="" className="w-60 h-60 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-xl shadow-xl"/>
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
      <AgileSection/>
    </Section.List>
  )
}

export default HowIWorkPage

export const Head: HeadFC = () => <title>How I Work - Side Trails Software Development</title>