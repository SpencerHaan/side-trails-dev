import * as React from "react"
import Accordion from "../components/Accordion"
import Card from "../components/Card"
import MDXRenderer from "../components/MDXRenderer"
import Section from "../components/Section"
import { useStaticQuery, graphql } from "gatsby"
import Content from "../components/Content"

const Summary = ({ ordinal, value}: { ordinal: number, value: string }) => {
  return (
    <div className="flex flex-row gap-3 md:gap-4 items-center min-h-[72px]">
      <div className="flex flex-col text-center justify-center w-7 h-7 lg:w-10 lg:h-10 p-1 lg:p-2 rounded-lg lg:rounded-xl font-extrabold bg-zinc-500 text-zinc-50">
        {ordinal}
      </div>
      <div className="flex flex-col flex-1 justify-center md:text-lg xl:text-xl 3xl:text-2xl text-center md:text-left">
        {value}
      </div>
    </div>
  )
}

const AgileSection = () => {
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
    <Section.Item heading={{
      title: "Agile",
      subtitle: ["\"Plans are worthless, but planning is everything.\"", "Dwight D. Eisenhower"]
    }}>
      <Content>
        <p>
          The <a href="https://agilemanifesto.org/" target="_blank">Agile Manifesto</a> was created in the early 2000s by prominent members of the software industry.
          This manifesto is what underpins many of the agile processes common in the software industry today, but I believe these processes misunderstand the intention behind the manifesto.
        </p>
        <p>
          Instead, I choose to follow these principles directly.
        </p>
      </Content>
      <Card heading="Principles">
        <Accordion>
          { data.allFile.nodes.map(({ childMdx }: any, i: number) => {
            const { id, body, frontmatter: { title } } = childMdx
            return (
              <Accordion.Item
                key={id}
                summary={<Summary ordinal={i + 1} value={title}/>}
              >
                <Content>
                  <MDXRenderer>{body}</MDXRenderer>
                </Content>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </Card>
    </Section.Item>
  )
}

export default AgileSection