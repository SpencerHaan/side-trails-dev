import * as React from "react"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Carousel from "../components/Carousel"
import MDXRenderer from "../components/MDXRenderer"
import Section from "../components/Section"
import Testimonial from "../components/Testimonial"
import { useStaticQuery, graphql } from "gatsby"

const TestimonialSection = () => {
  const data = useStaticQuery(graphql`
  query TestimonialsQuery {
    allFile(
      filter: {sourceInstanceName: {eq: "testimonials"}, extension: {eq: "mdx"}}
      sort: {name: ASC}
    ) {
      nodes {
        name
        childMdx {
          frontmatter {
            id
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
        {data.allFile.nodes.map(({childMdx}: any) => {
          const image = getImage(childMdx.frontmatter.image)
          return (
            <Carousel.Item key={childMdx.frontmatter.id}>
              <Testimonial
                image={image 
                  ? <GatsbyImage image={image} alt={childMdx.frontmatter.imageAlt}/>
                  : <StaticImage src="https://placehold.co/png?text=?" alt="Missing testimonial image"/>
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