import * as React from "react"
import { type HeadFC, type PageProps } from "gatsby"
import Layout from "../components/Layout"
import Section from "../components/Section"
import Card from "../components/Card"
import Accordion from "../components/Accordion"

interface PrincipleItemProperties {
  ordinal: number
  summary: string
  children?: string | React.ReactElement | React.ReactElement[]
}

const PrincipleItem = ({ordinal, summary, children}: PrincipleItemProperties) => {
  return (
    <li>
      <Accordion summary={
        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-col text-center justify-center w-8 h-8 md:w-10 md:h-10 p-2 rounded-2xl font-extrabold bg-zinc-500 text-zinc-50">
            {ordinal}
          </div>
          <div className="flex flex-col flex-1">
            {summary}
          </div>
        </div>
      }>
        {children}
      </Accordion>
    </li>
  )
}

const Philosophy: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Section title="Philosophy" subtitle='"Plans are worthless, but planning is everything." - Dwight D. Eisenhower'>
        <p className="text-justify">
          The <a href="https://agilemanifesto.org/" className="text-lion">Agile Manifesto</a> was created in the early 2000s by prominent members of the software industry, such as Martin Fowler. This manifesto is what underpins many of the agile processes common in the software industry today, but I believe these existing processes misunderstand the intention behind the manifesto. Instead, I choose to follow these principles directly.
        </p>
        <Card>
          <div className="text-center text-xl md:text-3xl 3xl:text-4xl">
            12 Principles
          </div>
          <ol className="flex flex-col p-2 md:p-4 gap-4">
            <PrincipleItem ordinal={1} summary="Customer satisfaction through valuable software">
              Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
            </PrincipleItem>
            <PrincipleItem ordinal={2} summary="Changing requirements are inevitable, welcome them">
              Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
            </PrincipleItem>
            <PrincipleItem ordinal={3} summary="Continuous delivery of working software, as quickly as possible">
              Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
            </PrincipleItem>
            <PrincipleItem ordinal={4} summary="Daily collaboration with the client is key">
              Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
            </PrincipleItem>
            <PrincipleItem ordinal={5} summary="Successful projects involve trusted and motivated individuals">
              Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
            </PrincipleItem>
            <PrincipleItem ordinal={6} summary="Communication is most effective face-to-face">
              Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
            </PrincipleItem>
            <PrincipleItem ordinal={7} summary="Working software is the primary measure of progress">
              Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
            </PrincipleItem>
            <PrincipleItem ordinal={8} summary="Sustainable development can be maintained indefinitely">
              Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
            </PrincipleItem>
            <PrincipleItem ordinal={9} summary="Enhance agility through technical excellence">
              Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
            </PrincipleItem>
            <PrincipleItem ordinal={10} summary="Keep it simple">
              Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
            </PrincipleItem>
            <PrincipleItem ordinal={11} summary="Self-organizing teams lead to the best architectures, requirements, and designs">
              Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
            </PrincipleItem>
            <PrincipleItem ordinal={12} summary="Reflect regularly, and adjust accordingly">
              Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate ut
            </PrincipleItem>
          </ol>
        </Card>
      </Section>
    </Layout>
  )
}

export default Philosophy

export const Head: HeadFC = () => <title>Philosophy - Side Trails Software Development</title>