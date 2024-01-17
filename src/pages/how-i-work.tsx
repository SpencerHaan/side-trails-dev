import * as React from "react"
import { type HeadFC } from "gatsby"
import { Section, Seo } from "../components"
import { AboutMeSection, AgileSection, WhySideTrailsSection } from "../sections"

const HowIWorkPage = () => {
    return (
    <Section.List>
      <AboutMeSection/>
      <WhySideTrailsSection/>
      <AgileSection/>
    </Section.List>
  )
}

export default HowIWorkPage

export const Head: HeadFC = () => <Seo title="How I Work"/>