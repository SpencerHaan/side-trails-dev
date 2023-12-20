import * as React from "react"
import Accordion from "../components/Accordion"
import Card from "../components/Card"
import Section from "../components/Section"
import { useStaticQuery, graphql } from "gatsby"
import { IconType } from "react-icons"
import Content from "../components/Content"
import MDXRenderer from "../components/MDXRenderer"
import Icons from "../utilities/Icons"

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
    <div className="flex flex-row gap-3 md:gap-4 items-center min-h-[72px]">
      <div className="flex flex-col text-center justify-center w-7 h-7 lg:w-10 lg:h-10 p-1 lg:p-2 rounded-lg lg:rounded-xl font-extrabold bg-zinc-500 text-zinc-50">
        <Icon className="h-full w-full"/>
      </div>
      <div className="flex flex-col flex-1 justify-center text-sm md:text-lg xl:text-xl text-center md:text-left">
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
      title: "About Me",
      subtitle: ["\"The unexamined life is not worth living.\"", "Socrates"]
    }}>
      <Card heading="Values">
        <Accordion>
          {result.allFile.nodes?.map(({ childMdx },) => {
            return (
              <Accordion.Item
                key={childMdx.id}
                summary={<Summary value={childMdx.frontmatter.title} icon={Icons[childMdx.frontmatter.icon]}/>}
              >
                <Content>
                  <MDXRenderer>{childMdx.body}</MDXRenderer>
                </Content>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </Card>
    </Section.Item>
  )
}

export default AboutMeSection