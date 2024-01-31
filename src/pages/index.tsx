import * as React from "react"
import { type HeadFC, type PageProps, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Button, Section, Seo, useLayoutControls } from "../components"
import { ContactSection, ExpertiseSection, ProcessSection, TestimonialSection } from "../sections"

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4 md:gap-6 lg:gap-8 xl:gap-10 p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="prose prose-sm md:prose-base xl:prose-xl prose-headings:m-1 prose-headings:uppercase prose-headings:text-white text-white text-center">
        <h1>Side Trails</h1>
        <h2>Software Development</h2>
        <p>
          Building + Rebuilding Software Systems
        </p>
      </div>
      <Link to="#contact">
        <Button label="Let's Chat" />
      </Link>
    </div>
  )
}

const IndexPage: React.FC<PageProps> = () => {
  const {setHero, clearHero} = useLayoutControls()

  React.useLayoutEffect(() => {
    setHero({
      body: <HeroSection/>,
      image: <StaticImage src="../images/hero.jpeg" alt="Overhead image of a trail through a forest" className="w-full h-full"/>,
    })
    return clearHero
  }, [])

  return (
    <Section.List>
      <ProcessSection />
      <ExpertiseSection/>
      <TestimonialSection/>
      <ContactSection/>
    </Section.List>
  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo/>
