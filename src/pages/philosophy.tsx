import * as React from "react"
import { useStaticQuery, type HeadFC, type PageProps, graphql } from "gatsby"
import Section from "../components/Section"
import Card from "../components/Card"
import Accordion from "../components/Accordion"
import MDXRenderer from "../components/MDXRenderer"

const PrincipleSummary = ({ ordinal, value}: { ordinal: string, value: string }) => {
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

const PrincipleBody = ({ ideas, value }: { ideas: string[], value: string }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <div className="text-base lg:text-lg pb-2">
            Core Ideas:
          </div>
          <ul className="pl-6 list-disc">
            {ideas.map((idea, i) => (
              <li key={i}>{idea}</li>
            ))}
          </ul>
        </div>
        <MDXRenderer>{value}</MDXRenderer>
      </div>
    </>
  )
}

const Philosophy: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
  query PrinciplesQuery {
    allFile(
      filter: {sourceInstanceName: {eq: "principles"}}
      sort: {childMdx: {frontmatter: {ordinal: ASC}}}
    ) {
      nodes {
        childMdx {
          frontmatter {
            ordinal
            principle
            ideas
          }
          body
        }
      }
    }
  }`
  )

  return (
    <Section title="Philosophy" subtitle={[<p>"Plans are worthless, but planning is everything."</p>, <p>Dwight D. Eisenhower</p>]}>
      <p className="text-justify">
        The <a href="https://agilemanifesto.org/" target="_blank" className="text-lion">Agile Manifesto</a> was created in the early 2000s by prominent members of the software industry, such as Martin Fowler. This manifesto is what underpins many of the agile processes common in the software industry today, but I believe these existing processes misunderstand the intention behind the manifesto. Instead, I choose to follow these principles directly.
      </p>
      <Card>
        <div className="text-center text-xl md:text-3xl 3xl:text-4xl">
          Principles
        </div>
        <Accordion>
          { data.allFile.nodes.map(({ childMdx }: any) => {
            const { body, frontmatter } = childMdx
            const { ordinal, principle, ideas } = frontmatter
            return (
              <Accordion.Item
                key={ordinal}
                summary={<PrincipleSummary ordinal={ordinal} value={principle}/>}
              >
                <PrincipleBody ideas={ideas} value={body}/>
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