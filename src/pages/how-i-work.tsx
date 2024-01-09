import * as React from "react"
import { type HeadFC } from "gatsby"
import { Section } from "../components"
import { AboutMeSection, AgileSection } from "../sections"
import WhySideTrailSection from "../sections/WhySideTrailsSection"

const HowIWorkPage = () => {
    return (
    <Section.List>
      <AboutMeSection/>
      <WhySideTrailSection/>
      <AgileSection/>
    </Section.List>
  )
}

export default HowIWorkPage

export const Head: HeadFC = () => <title>How I Work - Side Trails Software Development</title>