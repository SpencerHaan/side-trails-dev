import * as React from "react"
import { useStaticQuery, type HeadFC, type PageProps, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
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
        <p className="text-lg 3xl:text-xl text-zinc-400">
          {title}
        </p>
        <p className="text-xl 3xl:text-2xl">
          {text}
        </p>
        <p className="test-base 3xl:text-lg text-zinc-400">
          {subtext}
        </p>
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
    <div className="flex flex-row gap-6">
      { iconOrientation === HorizontalOrientation.Left
          ? <div className="m-auto"><Icon type={iconType} /></div>
          : ""
      }
      <div className="flex flex-col flex-1 text-center gap-3 3xl:gap-4">
        <div className="text-lg 3xl:text-xl text-zinc-500">
          {title}
        </div>
        <div className="text-lg 3xl:text-xl">
          {children}
        </div>
      </div>
      { iconOrientation === HorizontalOrientation.Right
          ? <div className="m-auto"><Icon type={iconType} /></div>
          : ""
      }
    </div>
  )
}

const IndexPage: React.FC<PageProps> = () => {
  // const [testimonials, setTestimonials] = React.useState([])
  const data = useStaticQuery(graphql`
  query MyQuery {
    allFile(filter: {sourceInstanceName: {eq: "testimonials"}}, sort: {name: ASC}) {
      nodes {
        name
        childMdx {
          frontmatter {
            id
            company
            contact
            role
          }
          body
        }
      }
    }
  }
  `)

  return (
    <Layout hero={{
      image: <StaticImage src="../images/hero.jpeg" alt="" layout="constrained"/>,
      content: 
        <div className="h-full flex flex-col">
          <p className="m-auto mt-32 3xl:mt-48 text-white text-center text-5xl 3xl:text-6xl uppercase font-extrabold leading-relaxed">
            Building, and Rebuilding,
            <br/>
            Software Systems
          </p>
          <div className="mx-auto mb-8 3xl:mb-24 text-center">
            <Button label="Let's Chat"/>
          </div>
        </div>
    }}>
      <Section
        title="Side Trailing"
        subtitle="The Side Trails Software Development process."
      >
        <p className="text-lg 3xl:text-xl">
          A process of discovery and exploration aimed at developing a deep understanding of your systems, technical challenges, and business problems.
          In order to establish this understanding, close collaboration with you is integral to the process. It is not to embarked upon alone.
        </p>
        <p className="text-lg 3xl:text-xl">
          Any development project I undertake can be loosely broken down into the following parts: Discover, Explore, and Build.
        </p>
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
      </Section>
      <Section
        title="Expertise" 
        subtitle="Some of the things I can do."
        className="bg-zinc-200"
      >
        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
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
      </Section>
      <Section
        title="What Clients Think"
        subtitle="And colleagues, too!"
        >
        <Carousel>
          {data.allFile.nodes.map(({childMdx}: any) => {
            return (
              <Carousel.Item key={childMdx.frontmatter.id}>
                <Testimonial
                image={<StaticImage src="https://placehold.co/128.png" alt="" height={128} layout="fixed"/>}
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
      </Section>
      <Section
        title="Let's Chat"
        subtitle="Need help with a project? Send me some details."
        className="bg-zinc-200"
      >
        <div className="space-y-4">
          <form className="grid grid-cols-2 gap-4">
            <div>
              <input type="text" placeholder="Name" name="contactName" className="w-full p-2 rounded-md"/>
            </div>
            <div>
              <input type="text" placeholder="Company" name="contactCompany" className="w-full p-2 rounded-md"/>
            </div>
            <div>
              <input type="text" placeholder="Email" name="contactEmail" className="w-full p-2 rounded-md"/>
            </div>
            <div>
              <select className="w-full h-full p-2 rounded-md bg-white text-zinc-400">
                <option disabled selected hidden>Budget</option>
                <option>$25,000-$50,000</option>
                <option>$50,000-$100,000</option>
                <option>$100,000+</option>
              </select>
            </div>
            <div className="flex-1 col-span-2">
              <textarea placeholder="What's your project about?" rows={10} className="w-full p-2 rounded-md"/>
            </div>
          </form>
          <div className="text-center">
            <Button label="Submit"/>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home - Side Trails Software Development</title>
