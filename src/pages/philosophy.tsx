import * as React from "react"
import { type HeadFC, type PageProps } from "gatsby"
import Section from "../components/Section"
import Card from "../components/Card"
import Accordion from "../components/Accordion"

interface PrincipleSummaryProperties {
  ordinal: number
  value: string
}

const PrincipleSummary = ({ ordinal, value}: PrincipleSummaryProperties) => {
  return (
    <div className="flex flex-row gap-3 md:gap-4 items-center min-h-[72px]">
      <div className="flex flex-col text-center justify-center w-8 h-8 md:w-10 md:h-10 p-2 rounded-xl md:rounded-2xl font-extrabold bg-zinc-500 text-zinc-50">
        {ordinal}
      </div>
      <div className="flex flex-col flex-1 justify-center">
        {value}
      </div>
    </div>
  )
}

const Philosophy: React.FC<PageProps> = () => {
  return (
    <Section title="Philosophy" subtitle={[<p>"Plans are worthless, but planning is everything."</p>, <p>Dwight D. Eisenhower</p>]}>
      <p className="text-justify">
        The <a href="https://agilemanifesto.org/" target="_blank" className="text-lion">Agile Manifesto</a> was created in the early 2000s by prominent members of the software industry, such as Martin Fowler. This manifesto is what underpins many of the agile processes common in the software industry today, but I believe these existing processes misunderstand the intention behind the manifesto. Instead, I choose to follow these principles directly.
      </p>
      <Card>
        <div className="text-center text-xl md:text-3xl 3xl:text-4xl">
          12 Principles
        </div>
        <Accordion>
          <Accordion.Item summary={<PrincipleSummary ordinal={1} value="Customer satisfaction through valuable software"/>}>
            Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
          </Accordion.Item>
          <Accordion.Item summary={<PrincipleSummary ordinal={2} value="Changing requirements are inevitable, welcome them"/>}>
            Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
          </Accordion.Item>
          <Accordion.Item summary={<PrincipleSummary ordinal={3} value="Continuous delivery of working software, as quickly as possible"/>}>
            Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
          </Accordion.Item>
          <Accordion.Item summary={<PrincipleSummary ordinal={4} value="Daily collaboration with the client is key"/>}>
            Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
          </Accordion.Item>
          <Accordion.Item summary={<PrincipleSummary ordinal={5} value="Successful projects involve trusted and motivated individuals"/>}>
            Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
          </Accordion.Item>
          <Accordion.Item summary={<PrincipleSummary ordinal={6} value="Communication is most effective face-to-face"/>}>
            Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
          </Accordion.Item>
          <Accordion.Item summary={<PrincipleSummary ordinal={7} value="Working software is the primary measure of progress"/>}>
            Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
          </Accordion.Item>
          <Accordion.Item summary={<PrincipleSummary ordinal={8} value="Sustainable development can be maintained indefinitely"/>}>
            Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
          </Accordion.Item>
          <Accordion.Item summary={<PrincipleSummary ordinal={9} value="Enhance agility through technical excellence"/>}>
            Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
          </Accordion.Item>
          <Accordion.Item summary={<PrincipleSummary ordinal={10} value="Keep it simple"/>}>
            Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
          </Accordion.Item>
          <Accordion.Item summary={<PrincipleSummary ordinal={11} value="Self-organizing teams lead to the best architectures, requirements, and designs"/>}>
            Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
          </Accordion.Item>
          <Accordion.Item summary={<PrincipleSummary ordinal={12} value="Reflect regularly, and adjust accordingly"/>}>
            Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
          </Accordion.Item>
        </Accordion>
      </Card>
    </Section>
  )
}

export default Philosophy

export const Head: HeadFC = () => <title>Philosophy - Side Trails Software Development</title>