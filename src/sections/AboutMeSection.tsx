import * as React from "react"
import { IconType } from "react-icons"
import { useStaticQuery, graphql } from "gatsby"
import Icons from "../utilities/Icons"
import { StaticImage } from "gatsby-plugin-image"
import { Accordion, Card, Content, MDXRenderer, Section } from "../components"

interface ValuesQueryResult {
  allFile: {
    nodes: {
      childMdx: {
        id: string
        frontmatter: {
          title: string
          icon: string
        }
        body: string
      }
    }[]
  }
}

const Summary = ({ value, icon: Icon }: { value: string, icon: IconType }) => {
  return (
    <div className="flex flex-row gap-4 items-center min-h-[72px]">
      <div className="flex flex-col text-center justify-center w-7 h-7 lg:w-10 lg:h-10 p-1 lg:p-2 rounded-lg lg:rounded-xl font-extrabold bg-zinc-500 text-zinc-50">
        <Icon className="h-full w-full"/>
      </div>
      <div className="flex flex-col flex-1 justify-center md:text-lg xl:text-xl 3xl:text-2xl text-center md:text-left">
        {value}
      </div>
    </div>
  )
}

const AboutMeSection = () => {
  const result = useStaticQuery<ValuesQueryResult>(graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "values"}}
      sort: {childMdx: {frontmatter: {slug: ASC}}}
    ) {
      nodes {
        childMdx {
          id
          frontmatter {
            title
            icon
          }
          body
        }
      }
    }
  }`
  )

  console.log("Result", result)
  
  return (
    <Section.Item heading={{
        title: "A Little About Me",
        subtitle: ["\"The unexamined life is not worth living.\"", "Socrates"]
      }}
    >
      <div className="flex flex-col gap-8">
        <Content className="prose-h3:mt-0">
          <div className="text-center mb-4 lg:float-left lg:mr-8">
            <StaticImage src="../images/headshot.jpeg" alt="Picture of Spencer Haan with a beautiful beard." className="w-60 h-60 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-xl shadow-xl"/>
          </div>
          <h3>
            Hey, my name is Spencer Haan and I'm Side Trails Software Development!
          </h3>
          <p>
            Guiding principles over following rules. Accuracy over expediency. Long-term thinking over short-term thinking.
          </p>
          <p>
            When I was 10 years old, if you had asked about my career aspirations, I would have eagerly said I wanted to be a video game developer. Little did I know that this path wouldn't necessarily place me in charge of the creative vision. The work-life balance within that industry isn’t ideal, either. Nonetheless, this dream became my guiding North Star.
          </p>
          <p>
            Software development is like a constantly changing puzzle, with each component fitting somewhere within the bigger picture. More often than not, these components are fuzzy rather than well-defined. I enjoy figuring out what these components should be, how they can be made clearer, where they should go, and, most importantly, why they should exist in the first place.
          </p>
          <p>
            I have an insatiable drive to understand interesting and complex problems. Simple problems often mask underlying complexity, and vice versa, so it is my belief that a shared, and deep, understanding of those problems is the path towards effective solutions.
          </p>
          <p>
            Despite my perfectionist nature, I’ve learned that my desire isn’t to make something perfect, but to instead do things properly by following my principles of accuracy, quality, and building for the long-term.
          </p>
          <p>
            I enjoy rebuilding systems and frameworks, envisioning a better, or even the best, versions of themselves. Described as a deep, lateral, and first-principles thinker, I challenge the status quo to better understand and determine if, and how, it needs to change.
          </p>
          <p>
            Ultimately, I’m looking for opportunities to solve problems that I find interesting, and to do so in my own unique and creative way.
          </p>
        </Content>
        <div>
          <Card heading="Values">
            <Accordion>
              {result.allFile.nodes?.map(({ childMdx },) => {
                return (
                  <Accordion.Item
                    key={childMdx.id}
                    summary={<Summary value={childMdx.frontmatter.title} icon={Icons[childMdx.frontmatter.icon]}/>}
                  >
                    <Content className="mb-4">
                      <MDXRenderer>{childMdx.body}</MDXRenderer>
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