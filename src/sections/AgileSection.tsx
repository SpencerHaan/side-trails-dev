import * as React from "react"
import { IconType } from "react-icons"
import { useStaticQuery, graphql } from "gatsby"
import Icons from "../utilities/Icons"
import { Section, Content, Card, Accordion, MDXRenderer } from "../components"

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

interface PrinciplesQueryResult {
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

const AgileSection = () => {
  const result = useStaticQuery<PrinciplesQueryResult>(graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "principles"}}
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

  return (
    <Section.Item heading={{
      title: "Agile",
      subtitle: ["\"Plans are worthless, but planning is everything.\"", "Dwight D. Eisenhower"]
    }}>
      <Content>
        <p>
          The Agile Manifesto was created in the early 2000s by prominent members of the software industry.
          This manifesto is what underpins many of the agile processes common in the software industry today, but I believe these processes misunderstand the intention behind the manifesto.
        </p>
        <p>
          The following principles are a condensed version of my understanding of manifestos original twelve:
        </p>
      </Content>
      <Card heading="Principles">
        <Accordion>
          { result.allFile.nodes.map(({ childMdx }: any, i: number) => {
            const { id, body, frontmatter: { title, icon } } = childMdx
            return (
              <Accordion.Item
                key={id}
                summary={<Summary value={title} icon={Icons[childMdx.frontmatter.icon]}/>}
              >
                <Content className="mb-4">
                  <MDXRenderer>{body}</MDXRenderer>
                </Content>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </Card>
      <Content>
        <center>
          <sup>
            Check out the <a href="https://agilemanifesto.org/principles.html" target="_blank">Principles behind the Agile Manifesto</a> for the originals.
          </sup>
        </center>
      </Content>
    </Section.Item>
  )
}

export default AgileSection