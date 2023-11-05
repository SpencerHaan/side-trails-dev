import * as React from "react"
import { type HeadFC, type PageProps } from "gatsby"
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

enum Justify {
  Left,
  Right
}

interface ExpertiseProperties {
  title: string
  iconType: React.ElementType<IconBaseProps>
  justifyIcon: Justify
  children: string
}

const ExpertiseTile = ({title, iconType: Icon, justifyIcon, children}: ExpertiseProperties) => {
  return (
    <div className="flex flex-row gap-6">
      { justifyIcon === Justify.Left
          ? <div className="my-auto">
              <div className="p-6 bg-zinc-300 rounded-full drop-shadow border border-zinc-400">
                <Icon size={32} className="text-zinc-500"/>
              </div>
            </div>
          : ""
      }
      <div className="flex flex-col text-center gap-4">
        <div className="text-zinc-500">
          {title}
        </div>
        <div>
          {children}
        </div>
      </div>
      { justifyIcon === Justify.Right
          ? <div className="my-auto">
              <div className="p-6 bg-zinc-300 rounded-full drop-shadow border border-zinc-400">
                <Icon size={32} className="text-zinc-500"/>
              </div>
            </div>
          : ""
      }
    </div>
  )
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout hero={{
      image: <StaticImage src="../images/hero.png" alt="" layout="fullWidth"/>,
      content: 
        <div className="h-full flex flex-col">
          <p className="m-auto text-white text-center text-5xl uppercase font-extrabold leading-relaxed">
            Building, and Rebuilding,
            <br/>
            Software Systems
          </p>
          <div className="w-1/2 mx-auto mb-16 text-center">
            <button className="w-36 transition ease-in-out p-3 bg-white hover:bg-lion hover:font-extrabold rounded-xl">
              Let's Chat
            </button>
          </div>
        </div>,
    }}>
      <Section
        title="Side Trailing"
        description="The Side Trails Software Development process."
      >
        <p>
          A process of discovery and exploration aimed at developing a deep understanding of your systems, technical challenges, and business problems.
          In order to establish this understanding, close collaboration with you is integral to the process. It is not to embarked upon alone.
        </p>
        <p>
          Any development project I undertake can be loosely broken down into the following parts: Discover, Explore, and Build.
        </p>
        <ListCard title="Process">
          <ListCard.Item
            image={<StaticImage src="../images/discover.png" alt="" width={256} height={256} layout="fixed" className="rounded-xl bg-zinc-50"/>}
            justify={ListCard.Item.Justify.Right}
          >
              <p className="text-lg text-gray-400">
                Discover
              </p>
              <p className="text-xl">
                First, let's discover what your business needs/technical challenges are all about.
              </p>
              <p className="text-gray-400">
                What are you trying to achieve? What existing software solutions do you have? What are the non-negotiable vs. the nice-to-haves requirements?
              </p>
          </ListCard.Item>
          <ListCard.Item
            image={<StaticImage src="../images/explore.png" alt="" width={256} height={256} layout="fixed" className="rounded-xl bg-zinc-50"/>}
            justify={ListCard.Item.Justify.Left}
          >
              <p className="text-lg text-gray-400">
                Explore
              </p>
              <p className="text-xl">
                Second, let's explore these business needs/technical challenges to establish a shared and deep understanding.
              </p>
              <p className="text-gray-400">
                What are the various systems and processes? How do they interact? What are the first principles? Close collaboration is key.
              </p>
          </ListCard.Item>
          <ListCard.Item
            image={<StaticImage src="../images/build.png" alt="" width={256} height={256} layout="fixed" className="rounded-xl bg-zinc-50"/>}
            justify={ListCard.Item.Justify.Right}
          >
              <p className="text-lg text-gray-400">
                Build
              </p>
              <p className="text-xl">
                Third, let's build the solution.
              </p>
              <p className="text-gray-400">
                Discovery and exploration remain ongoing. There will always be more questions to ask and answer throughout the process, always more side trails to explore.
              </p>
          </ListCard.Item>
        </ListCard>
      </Section>
      <Section
        title="Expertise" 
        description="Some of the things I can do."
        className="bg-gray-200"
      >
        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          <ExpertiseTile title="System Anaylsis" iconType={AnalysisIcon} justifyIcon={Justify.Left}>
            Develop an understanding of the breadth and depth of your system, and the relationships and interactions between the various parts.
          </ExpertiseTile>
          <ExpertiseTile title="System Architecture" iconType={ArchitectureIcon} justifyIcon={Justify.Right}>
            Design solutions that incorporate and consider all aspects of a system.
          </ExpertiseTile>
          <ExpertiseTile title="Software Prototyping" iconType={PrototypeIcon} justifyIcon={Justify.Left}>
            Exploratory software development to better understand the solution you want, and need.
          </ExpertiseTile>
          <ExpertiseTile title="Software Design and Development" iconType={DevelopmentIcon} justifyIcon={Justify.Right}>
            Implement well-designed code and abstractions to enable future growth while reducing maintenance and development overhead.
          </ExpertiseTile>
          <ExpertiseTile title="Cloud Integration" iconType={CloudIcon} justifyIcon={Justify.Left}>
            Introduce new cloud services into existing systems or processes, or migrate existing non-cloud systems to the cloud.
          </ExpertiseTile>
          <ExpertiseTile title="Rucksack" iconType={RucksackIcon} justifyIcon={Justify.Right}>
            Java, JavaScript/TypeScript, React, MySQL/SQL, AWS, and more…
          </ExpertiseTile>
        </div>
      </Section>
      <Section
        title="What Clients Think"
        description="And colleagues, too!"
      >
        <Carousel>
          <Carousel.Item>
            <Testimonial
              image={<StaticImage src="https://placehold.co/128.png" alt="" height={128} layout="fixed"/>}
              contact="John Smith"
              company="Company Inc."
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Et pharetra pharetra massa massa ultricies."
            </Testimonial>
          </Carousel.Item>
          <Carousel.Item>
            <Testimonial
              image={<StaticImage src="https://placehold.co/128.png" alt="" height={128} layout="fixed" className="m-auto rounded-xl"/>}
              contact="Jane Doe"
              company="Company Inc."
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Et pharetra pharetra massa massa ultricies."
            </Testimonial>
          </Carousel.Item>
        </Carousel>
      </Section>
      <Section
        title="Let's Chat"
        description="Need help with a project? Send me some details."
        className="bg-gray-200"
      >
        <div>
          <form className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" name="contactName" className="p-2 rounded-md flex-1"/>
            <input type="text" placeholder="Company" name="contactCompany" className="p-2 rounded-md flex-1"/>
            <input type="text" placeholder="Email" name="contactEmail" className="p-2 rounded-md flex-1"/>
            <select className="p-2 rounded-md flex-1 bg-white text-gray-400">
              <option disabled selected hidden>Budget</option>
              <option>$25,000-$50,000</option>
              <option>$50,000-$100,000</option>
              <option>$100,000+</option>
            </select>
            <textarea placeholder="What's your project about?" rows={10} className="p-2 rounded-md flex-1 col-span-2"/>
          </form>
          <button className="w-36 transition ease-in-out p-3 bg-gray-400 hover:bg-gray-500 rounded-xl">
            Submit
          </button>
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home - Side Trails Software Development</title>
