import * as React from "react"
import { type HeadFC, type PageProps, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Overlay, Button, Section, useLayoutControls } from "../components"
import { ContactSection, ExpertiseSection, ProcessSection, TestimonialSection } from "../sections"

const IndexPage: React.FC<PageProps> = () => {
  const heroRef = React.useRef(null)
  const { addOverlay, removeOverlay } = useLayoutControls()
  React.useLayoutEffect(() => {
    const hero = heroRef.current
    if (!hero) {
      return
    }

    addOverlay({
      element: hero,
      threshold: 0.95
    })
    return () => removeOverlay()
  }, [heroRef])

  return (
    <>
      <div ref={heroRef}>
        <Overlay>
          <StaticImage src="../images/hero.jpeg" alt="Overhead image of a trail through a forest" className="w-full h-full"/>
          <div className="relative flex flex-col items-center justify-center p-2 gap-8 xl:gap-12 3xl:gap-24 pt-20 md:pt-24 xl:pt-36 3xl:pt-48 pb-8 md:pb-12 xl:pb-14">
            <div className="flex flex-col text-center gap-4 3xl:gap-8">
              <div className="flex flex-col 3xl:gap-4 uppercase text-white/90">
                <p className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl">Side Trails</p>
                <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl">Software Development</p>
              </div>
              <p className="md:text-lg lg:text-xl 3xl:text-3xl text-zinc-200/90">Building + Rebuilding Software Systems</p>
            </div>
            <Link to="#contact">
              <Button label="Let's Chat" />
            </Link>
          </div>
        </Overlay>
      </div>
      <Section.List>
        <ProcessSection />
        <ExpertiseSection/>
        <TestimonialSection/>
        <ContactSection/>
      </Section.List>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home - Side Trails Software Development</title>
