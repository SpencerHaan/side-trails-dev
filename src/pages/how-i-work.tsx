import * as React from "react"
import { type HeadFC } from "gatsby"
import Section from "../components/Section"
import AgileSection from "../sections/AgileSection"
import AboutMeSection from "../sections/AboutMeSection"

const HowIWorkPage = () => {
    return (
    <Section.List>
      <AboutMeSection/>
      <Section.Item heading={{
        title: "Why Side Trails?",
        subtitle: ["\"Seek first to understand, then to be understood\""]
      }}>
      </Section.Item>
      <AgileSection/>
    </Section.List>
  )
}

export default HowIWorkPage

export const Head: HeadFC = () => <title>How I Work - Side Trails Software Development</title>