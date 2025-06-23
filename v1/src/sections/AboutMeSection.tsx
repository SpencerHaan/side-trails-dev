import * as React from "react"
import { IconType } from "react-icons"
import { StaticImage } from "gatsby-plugin-image"
import { Accordion, Card, Content, MDXRenderer, Section, SquareGlyph } from "../components"
import { useValues } from "../data/Values"

const Summary = ({ value, iconType }: { value: string, iconType: IconType }) => {
  return (
    <div className="flex flex-row gap-4 items-center min-h-[72px]">
      <SquareGlyph iconType={iconType}/>
      <div className="flex flex-col flex-1 justify-center md:text-lg xl:text-xl 3xl:text-2xl text-center md:text-left">
        {value}
      </div>
    </div>
  )
}

const AboutMeSection = () => {
  const values = useValues()

  return (
    <Section.Item heading={{
        title: "A Little About Me",
        subtitle: ["\"The unexamined life is not worth living.\"", "Socrates"]
      }}
    >
      <div className="flex flex-col gap-8">
        <Content className="prose-h3:mt-0">
          <div className="text-center mb-4 lg:float-left lg:mr-8">
            <StaticImage src="../images/headshot.jpeg" alt="Picture of Spencer Haan with a beautiful beard." className="w-60 h-60 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-xl"/>
          </div>
          <h3>
            Hey, my name is Spencer Haan and I'm Side Trails Software Development!
          </h3>
          <p>
            I’m an avid gamer, and have been for most of my life. As a kid my mind was constantly inundated with ideas on how to improve the games I was playing, or how I’d build a game with more interesting mechanics. This drove me towards software development, where I had hoped one day I’d be able to bring those ideas to life. Over the course of my career, I discovered that this behaviour wasn’t exclusive to games. I found a passion for solving interesting and complex problems, and realized that what I enjoyed was the ability to bring systems to life.
          </p>
          <p>
            I’ve been described as a thinker. For much of my life I had a hunch I spent more time in my head than many of my peers. It wasn’t until I started my career that I learned just how much more I think about problems. Given an interesting enough problem, my brain plugs away at it until I’m satisfied I both understand it well enough, and have an adequate solution.
          </p>
          <p>
            I like to ask a lot of questions, and often I’ll respond to questions with more questions. I want to make sure I understand the question well enough before I provide an answer. Otherwise, how can I know if the answer is actually helpful or not?
          </p>
        </Content>
        <div>
          <Card heading="Values">
            <Accordion>
              {values.map(value => {
                return (
                  <Accordion.Item
                    key={value.id}
                    summary={<Summary value={value.title} iconType={value.icon}/>}
                  >
                    <Content className="mb-4">
                      <MDXRenderer>{value.body}</MDXRenderer>
                    </Content>
                  </Accordion.Item>
                )
              })}
            </Accordion>
          </Card>
        </div>
      </div>
    </Section.Item>
  )
}

export default AboutMeSection