import * as React from "react"
import { IconType } from "react-icons"
import { Section, Content, Card, Accordion, MDXRenderer, SquareGlyph } from "../components"
import { usePrinciples } from "../data/Principles"

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

const AgileSection = () => {
  const principles = usePrinciples()

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
          { principles.map(principle => {
            return (
              <Accordion.Item
                key={principle.id}
                summary={<Summary value={principle.title} iconType={principle.icon}/>}
              >
                <Content className="mb-4">
                  <MDXRenderer>{principle.body}</MDXRenderer>
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