import * as React from "react"
import { useStaticQuery, type HeadFC, type PageProps, graphql, Link } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import Section from "../components/Section"
import Testimonial from "../components/Testimonial"
import Carousel from "../components/Carousel"
import ListCard from "../components/ListCard"
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
import MDXRenderer from "../components/MDXRenderer"
import Icon from "../components/Icon"
import { LayoutContext } from "../components/Layout"
import { navigate } from "@reach/router"
import Collapsible from "../components/Collapsible"

interface ProcessTileProperties {
  image: React.ReactElement
  imageOrientation: HorizontalOrientation
  title: string
  text: string
  subtext: string
}

const ProcessTile = ({image, imageOrientation, title, text, subtext}: ProcessTileProperties) => {
  return (
    <ListCard.Item
      image={image}
      imageOrientation={imageOrientation}
    >
        <div className="text-sm md:text-base xl:text-lg 3xl:text-xl text-center md:text-left text-zinc-400">
          {title}
        </div>
        <div className="text-base md:text-lg xl:text-xl 3xl:text-2xl text-center md:text-left">
          {text}
        </div>
        <div className="text-xs md:text-sm xl:text-base 3xl:text-lg text-zinc-400">
          {subtext}
        </div>
    </ListCard.Item>
  )
}

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
  const data = useStaticQuery(graphql`
  query TestimonialsQuery {
    allFile(
      filter: {sourceInstanceName: {eq: "testimonials"}, extension: {eq: "mdx"}}
      sort: {name: ASC}
    ) {
      nodes {
        name
        childMdx {
          frontmatter {
            id
            company
            contact
            role
            imageAlt
            image {
              childImageSharp {
                gatsbyImageData(height: 128)
              }
            }
          }
          body
        }
      }
    }
  }
  `)
  
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
        <div className="grid">
          <StaticImage src="../images/hero.jpeg" alt="" objectFit="cover" className="col-start-1 col-end-1 row-start-1 row-end-1"/>
          <div className="col-start-1 col-end-1 row-start-1 row-end-1 relative">
            <div className="flex flex-col items-center justify-center p-2 gap-8 xl:gap-12 pt-20 md:pt-24 xl:pt-36 pb-8 md:pb-12 xl:pb-14">
              <div className="flex flex-col text-center gap-4">
                <div className="uppercase text-white/90">
                  <p className="text-3xl md:text-4xl lg:text-5xl">Side Trails</p>
                  <p className="text-xl md:text-2xl lg:text-3xl">Software Development</p>
                </div>
                <p className="text-base md:text-lg lg:text-xl text-zinc-200/90">Building + Rebuilding Software Systems</p>
              </div>
              <Link to="#contact">
                <Button label="Let's Chat" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Section.List>
        <Section.Item
          title="Side Trailing"
          subtitle="The Side Trails Software Development process."
        >
          <div className="flex flex-col text-sm md:text-base xl:text-lg 3xl:text-xl gap-4">
            <p>
              A process of discovery and exploration aimed at developing a deep understanding of your systems, technical challenges, and business problems.
              In order to establish this understanding, close collaboration with you is integral to the process. It is not to embarked upon alone.
            </p>
            <p>
              Any development project I undertake can be loosely broken down into the following parts: Discover, Explore, and Build.
            </p>
          </div>
          <ListCard title="Process">
            <ProcessTile
              image={<StaticImage src="../images/discover.png" alt="" width={256} height={256} layout="fixed" className="rounded-xl bg-zinc-50"/>}
              imageOrientation={HorizontalOrientation.Right}
              title="Discover"
              text="First, let's discover what your business needs/technical challenges are all about."
              subtext="What are you trying to achieve? What existing software solutions do you have? What are the non-negotiable vs. the nice-to-haves requirements?"
            />
            <ProcessTile
              image={<StaticImage src="../images/explore.png" alt="" width={256} height={256} layout="fixed" className="rounded-xl bg-zinc-50"/>}
              imageOrientation={HorizontalOrientation.Left}
              title="Explore"
              text="Second, let's explore these business needs/technical challenges to establish a shared and deep understanding."
              subtext="What are the various systems and processes? How do they interact? What are the first principles? Close collaboration is key."
            />
            <ProcessTile
              image={<StaticImage src="../images/build.png" alt="" width={256} height={256} layout="fixed" className="rounded-xl bg-zinc-50"/>}
              imageOrientation={HorizontalOrientation.Right}
              title="Build"
              text="Third, let's build the solution."
              subtext="Discovery and exploration remain ongoing. There will always be more questions to ask and answer throughout the process, always more side trails to explore."
            />
          </ListCard>
        </Section.Item>
        <Section.Item
          title="Expertise" 
          subtitle="Some of the things I can do."
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
        <Section.Item
          title="What Clients Think"
          subtitle="And colleagues, too!"
          >
          <Carousel>
            {data.allFile.nodes.map(({childMdx}: any) => {
              const image = getImage(childMdx.frontmatter.image)
              return (
                <Carousel.Item key={childMdx.frontmatter.id}>
                  <Testimonial
                    image={image 
                      ? <GatsbyImage image={image} alt={childMdx.frontmatter.imageAlt}/>
                      : <StaticImage src="https://placehold.co/128/png?text=?" alt="" height={128}/>
                    }
                    contact={childMdx.frontmatter.contact}
                    role={childMdx.frontmatter.role}
                    company={childMdx.frontmatter.company}
                  >
                    <MDXRenderer>
                      {childMdx.body}
                    </MDXRenderer>
                  </Testimonial>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Section.Item>
        <Section.Item
          anchor="contact"
          title="Let's Chat"
          subtitle="Need help with a project? Send me some details."
        >
          <div className="space-y-8">
            <form className="flex flex-wrap -m-2 text-sm xl:text-base">
              <div className="w-full md:max-w-[50%] p-2">
                <input type="text" placeholder="Name" name="contactName" className="w-full h-10 p-2 rounded-md"/>
              </div>
              <div className="w-full md:max-w-[50%] p-2">
                <input type="text" placeholder="Company" name="contactCompany" className="w-full h-10 p-2 rounded-md"/>
              </div>
              <div className="w-full md:max-w-[50%] p-2">
                <input type="text" placeholder="Email" name="contactEmail" className="w-full h-10 p-2 rounded-md"/>
              </div>
              <div className="w-full md:max-w-[50%] p-2">
                <select className="w-full h-10 p-2 rounded-md bg-white text-zinc-400">
                  <option disabled selected hidden>Budget</option>
                  <option>$25,000-$50,000</option>
                  <option>$50,000-$100,000</option>
                  <option>$100,000+</option>
                </select>
              </div>
              <div className="w-full m-2">
                <textarea placeholder="What's your project about?" rows={10} className="w-full p-2 rounded-md"/>
              </div>
            </form>
            <div className="text-center">
              <Button disabled={true} label="Submit"/>
            </div>
          </div>
        </Section.Item>
      </Section.List>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home - Side Trails Software Development</title>
