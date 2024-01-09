import * as React from "react"
import { getImage, GatsbyImage, StaticImage, ImageDataLike } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Section, Carousel, Testimonial, MDXRenderer } from "../components"

interface TestimonialQueryResult {
  allFile: {
    nodes: {
      childMdx: {
        id: string,
        frontmatter: {
          company: string
          contact: string
          role: string
          imageAlt: string
          image: ImageDataLike
        }
        body: string
      }
    }[]
  }
}

const TestimonialSection = () => {
  const result = useStaticQuery<TestimonialQueryResult>(graphql`
  {
    allFile(
      filter: {sourceInstanceName: {eq: "testimonials"}, extension: {eq: "mdx"}}
      sort: {childMdx: {frontmatter: {slug: ASC}}}
    ) {
      nodes {
        childMdx {
          id
          frontmatter {
            company
            contact
            role
            imageAlt
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          body
        }
      }
    }
  }
  `)
  
  return (
    <Section.Item heading={{ title: "What Clients Think", subtitle: "And colleagues, too!" }}>
      <Carousel>
        {result.allFile.nodes?.map(({ childMdx }) => {
          const image = getImage(childMdx.frontmatter.image)
          return (
            <Carousel.Item key={childMdx.id}>
              <Testimonial
                image={image 
                  ? <GatsbyImage image={image} alt={childMdx.frontmatter.imageAlt}/>
                  : <StaticImage src="https://placehold.co/500/png?text=?" alt="Missing testimonial image"/>
                }
                contact={childMdx.frontmatter.contact}
                role={childMdx.frontmatter.role}
                company={childMdx.frontmatter.company}
              >
                <MDXRenderer>
                  {childMdx.body}
                </MDXRenderer>
              </Testimonial>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </Section.Item>
  )
}

export default TestimonialSection