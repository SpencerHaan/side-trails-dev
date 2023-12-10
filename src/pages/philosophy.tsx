import * as React from "react"
import { useStaticQuery, type HeadFC, type PageProps, graphql } from "gatsby"
import Section from "../components/Section"
import Card from "../components/Card"
import Accordion from "../components/Accordion"
import MDXRenderer from "../components/MDXRenderer"

const PrincipleSummary = ({ ordinal, value}: { ordinal: number, value: string }) => {
  return (
    <div className="flex flex-row gap-3 md:gap-4 items-center min-h-[72px]">
      <div className="flex flex-col text-center justify-center w-8 h-8 lg:w-10 lg:h-10 p-2 rounded-xl lg:rounded-2xl font-extrabold bg-zinc-500 text-zinc-50">
        {ordinal}
      </div>
      <div className="flex flex-col flex-1 justify-center text-sm md:text-lg xl:text-xl text-center md:text-left">
        {value}
      </div>
    </div>
  )
}

const Philosophy: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
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
          }
          body
        }
      }
    }
  }`
  )

  return (
    <Section heading={{ title: "Philosophy", subtitle: ["\"Plans are worthless, but planning is everything.\"", "Dwight D. Eisenhower"] }}>
      <div className="prose prose-sm">
        <p>
          The <a href="https://agilemanifesto.org/" target="_blank">Agile Manifesto</a> was created in the early 2000s by prominent members of the software industry.
        </p>
        <p>
          This manifesto is what underpins many of the agile processes common in the software industry today, but I believe these processes misunderstand the intention behind the manifesto.
        </p>
        <p>
          Instead, I choose to follow these principles directly.
        </p>
      </div>
      <Card heading="Principles">
        <Accordion>
          { data.allFile.nodes.map(({ childMdx }: any, i: number) => {
            const { id, body, frontmatter: { title } } = childMdx
            return (
              <Accordion.Item
                key={id}
                summary={<PrincipleSummary ordinal={i + 1} value={title}/>}
              >
                <div className="prose prose-sm">
                  <MDXRenderer>{body}</MDXRenderer>
                </div>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </Card>
    </Section>
  )
}

export default Philosophy

export const Head: HeadFC = () => <title>Philosophy - Side Trails Software Development</title>