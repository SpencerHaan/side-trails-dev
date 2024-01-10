import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Section, Content, Card } from "../components"
import { Orientation } from "../utilities"

interface ItemProperties {
  image: React.ReactElement
  imageOrientation: Orientation.Horizontal
  title: string
  text: string
  subtext: string
}

const Item = ({ image, imageOrientation, title, text, subtext }: ItemProperties) => {
  const Image = () => (
    <div className="flex justify-center max-w-[192px] md:max-w-[224px] rounded-xl overflow-clip bg-white">
      {image}
    </div>
  )
  return (
    <div className={`flex ${imageOrientation === Orientation.Horizontal.Left ? "flex-wrap" : "flex-wrap-reverse"} justify-center items-center gap-4`}>
      { imageOrientation === Orientation.Horizontal.Left
          ? <Image/>
          : null
      }
      <Content className="flex-1 min-w-[320px] text-center md:text-left">
        <h4>{title}</h4>
        <p>{text}</p>
        <p className="text-zinc-400">{subtext}</p>
      </Content>
      { imageOrientation === Orientation.Horizontal.Right
          ? <Image/>
          : null
      }
    </div>
  )
}

const ProcessSection = () => {
  return (
    <Section.Item heading={{ title: "Side Trailing", subtitle: "The Side Trails Software Development process." }}>
      <Content>
        <p>
          A process of discovery and exploration aimed at developing a deep understanding of your systems, technical challenges, and business problems.
          In order to establish this understanding, close collaboration with you is integral to the process. It is not to embarked upon alone.
        </p>
        <p>
          Any development project I undertake can be loosely broken down into the following parts: Discover, Explore, and Build.
        </p>
      </Content>
      <Card heading="Process">
        <div className="flex flex-col gap-12 lg:gap-6">
          <Item
            image={<StaticImage src="../images/discover.png" alt="" objectFit="fill"/>}
            imageOrientation={Orientation.Horizontal.Right}
            title="Discover"
            text="First, let's discover what your business needs/technical challenges are all about."
            subtext="What are you trying to achieve? What existing software solutions do you have? What are the non-negotiable vs. the nice-to-haves requirements?"
            />
          <Item
            image={<StaticImage src="../images/explore.png" alt="" objectFit="fill"/>}
            imageOrientation={Orientation.Horizontal.Left}
            title="Explore"
            text="Second, let's explore these business needs/technical challenges to establish a shared and deep understanding."
            subtext="What are the various systems and processes? How do they interact? What are the first principles? Close collaboration is key."
            />
          <Item
            image={<StaticImage src="../images/build.png" alt="" objectFit="fill"/>}
            imageOrientation={Orientation.Horizontal.Right}
            title="Build"
            text="Third, let's build the solution."
            subtext="Discovery and exploration remain ongoing. There will always be more questions to ask and answer throughout the process, always more side trails to explore."
            />
          </div>
        </Card>
    </Section.Item>
  )
}

export default ProcessSection