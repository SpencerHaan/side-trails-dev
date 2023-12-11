import * as React from "react"
import { type HeadFC, type PageProps, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Section from "../components/Section"
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
import { HorizontalOrientation } from "../utilities/HorizontalOrientation"
import Button from "../components/Button"
import Icon from "../components/Icon"
import { LayoutContext } from "../components/Layout"
import ProcessSection from "../sections/ProcessSection"
import TestimonialSection from "../sections/TestimonialSection"
import Overlay from "../components/Overlay"
import ContactForm from "../components/ContactForm"

interface ExpertiseProperties {
  title: string
  iconType: React.ElementType<IconBaseProps>
  iconOrientation: HorizontalOrientation
  children: string
}

const ExpertiseTile = ({title, iconType, iconOrientation, children}: ExpertiseProperties) => {
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

const IndexPage: React.FC<PageProps> = () => {
  const heroRef = React.useRef(null)
  const layoutOptions = React.useContext(LayoutContext)
  React.useLayoutEffect(() => {
    const hero = heroRef.current
    if (!hero) {
      return
    }

    layoutOptions?.addOverlay({
      element: hero,
      threshold: 0.95
    })
    return () => layoutOptions?.removeOverlay()
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
        <Section.Item
          heading={{ title: "Expertise", subtitle:"Some of the things I can do." }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <ExpertiseTile title="System Anaylsis" iconType={AnalysisIcon} iconOrientation={HorizontalOrientation.Left}>
              Develop an understanding of the breadth and depth of your system, and the relationships and interactions between the various parts.
            </ExpertiseTile>
            <ExpertiseTile title="System Architecture" iconType={ArchitectureIcon} iconOrientation={HorizontalOrientation.Right}>
              Design solutions that incorporate and consider all aspects of a system.
            </ExpertiseTile>
            <ExpertiseTile title="Software Prototyping" iconType={PrototypeIcon} iconOrientation={HorizontalOrientation.Left}>
              Exploratory software development to better understand the solution you want, and need.
            </ExpertiseTile>
            <ExpertiseTile title="Software Design and Development" iconType={DevelopmentIcon} iconOrientation={HorizontalOrientation.Right}>
              Implement well-designed code and abstractions to enable future growth while reducing maintenance and development overhead.
            </ExpertiseTile>
            <ExpertiseTile title="Cloud Integration" iconType={CloudIcon} iconOrientation={HorizontalOrientation.Left}>
              Introduce new cloud services into existing systems or processes, or migrate existing non-cloud systems to the cloud.
            </ExpertiseTile>
            <ExpertiseTile title="Rucksack" iconType={RucksackIcon} iconOrientation={HorizontalOrientation.Right}>
              Java, JavaScript/TypeScript, React, MySQL/SQL, AWS, and more…
            </ExpertiseTile>
          </div>
        </Section.Item>
        <TestimonialSection />
        <Section.Item
          anchor="contact"
          heading={{ title: "Let's Chat", subtitle: "Need help with a project? Send me some details." }}
        >
          <ContactForm/>
        </Section.Item>
      </Section.List>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home - Side Trails Software Development</title>
