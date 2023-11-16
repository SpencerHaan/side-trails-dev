import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import Section from "../components/Section"
import Card from "../components/Card"
import { StaticImage } from "gatsby-plugin-image"

interface ProjectCardProperties {
  url: string
  image: React.ReactElement<typeof StaticImage>
  company: string
  title: string
  children: string
}

const ProjectCard = ({url, image, company, title, children}: ProjectCardProperties) => {
  return (
    <Link to={url}>
      <Card>
        <div className="flex flex-row gap-4">
          <div>
            {image}
          </div>
          <div className="flex flex-col gap-1 justify-center">
            <div className="text-sm 3xl:text-base text-zinc-400">
              {company}
            </div>
            <div className="text-base 3xl:text-lg">
              {title}
            </div>
            <div className="text-base 3xl:text-lg">
              {children}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Section title="Projects">
      <div className="flex flex-col gap-4">
        <ProjectCard
          url="/project"
          image={<StaticImage src="https://placehold.co/128/png" alt="" width={128} height={128} layout="fixed"/>}
          company="Company Inc."
          title="Project Title"
        >
          Accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit.
        </ProjectCard>
      </div>
    </Section>
  )
}

export default ProjectsPage

export const Head: HeadFC = () => <title>Projects - Side Trails Software Development</title>
