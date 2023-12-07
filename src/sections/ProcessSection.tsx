import * as React from "react"
import Section from "../components/Section"
import { StaticImage } from "gatsby-plugin-image"
import ListCard from "../components/ListCard"
import { HorizontalOrientation } from "../utilities/HorizontalOrientation"

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

const ProcessSection = () => {
  return (
    <Section.Item heading={{ title: "Side Trailing", subtitle: "The Side Trails Software Development process." }}>
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
          image={<StaticImage src="../images/discover.png" alt="" objectFit="fill"/>}
          imageOrientation={HorizontalOrientation.Right}
          title="Discover"
          text="First, let's discover what your business needs/technical challenges are all about."
          subtext="What are you trying to achieve? What existing software solutions do you have? What are the non-negotiable vs. the nice-to-haves requirements?"
        />
        <ProcessTile
          image={<StaticImage src="../images/explore.png" alt="" objectFit="fill"/>}
          imageOrientation={HorizontalOrientation.Left}
          title="Explore"
          text="Second, let's explore these business needs/technical challenges to establish a shared and deep understanding."
          subtext="What are the various systems and processes? How do they interact? What are the first principles? Close collaboration is key."
        />
        <ProcessTile
          image={<StaticImage src="../images/build.png" alt="" objectFit="fill"/>}
          imageOrientation={HorizontalOrientation.Right}
          title="Build"
          text="Third, let's build the solution."
          subtext="Discovery and exploration remain ongoing. There will always be more questions to ask and answer throughout the process, always more side trails to explore."
        />
      </ListCard>
    </Section.Item>
  )
}

export default ProcessSection