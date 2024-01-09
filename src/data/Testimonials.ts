import { graphql, useStaticQuery } from "gatsby";
import { AllFileQueryResult, Image } from "./Types";


interface TestimonialFrontmatter {
  image: Image
  company: string
  contact: string
  role: string
}

interface Testimonial {
  id: string,
  company: string
  contact: string
  role: string
  image: Image
  body: string

}

function useTestimonials(): Testimonial[] {
  const result = useStaticQuery<AllFileQueryResult<TestimonialFrontmatter>>(graphql`
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
            image {
              source {
                childImageSharp {
                  gatsbyImageData
                }
              }
              alt
            }
          }
          body
        }
      }
    }
  }`)
  return result.allFile.nodes?.map(({ childMdx }) => ({
    id: childMdx.id,
    company: childMdx.frontmatter.company,
    contact: childMdx.frontmatter.contact,
    role: childMdx.frontmatter.role,
    image: childMdx.frontmatter.image,
    body: childMdx.body
  })) || []
}

export {
  Testimonial,
  useTestimonials
}
