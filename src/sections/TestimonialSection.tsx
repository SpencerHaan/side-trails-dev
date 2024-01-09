import * as React from "react"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Section, Carousel, Testimonial, MDXRenderer } from "../components"
import { useTestimonials } from "../data/Testimonials"

const TestimonialSection = () => {
  const testimonials = useTestimonials()
  
  return (
    <Section.Item heading={{ title: "What Clients Think", subtitle: "And colleagues, too!" }}>
      <Carousel>
        {testimonials.map(testimonial => {
          const image = getImage(testimonial.image.source)
          return (
            <Carousel.Item key={testimonial.id}>
              <Testimonial
                image={image 
                  ? <GatsbyImage image={image} alt={testimonial.image.alt}/>
                  : <StaticImage src="https://placehold.co/500/png?text=?" alt="Missing testimonial image"/>
                }
                contact={testimonial.contact}
                role={testimonial.role}
                company={testimonial.company}
              >
                <MDXRenderer>
                  {testimonial.body}
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