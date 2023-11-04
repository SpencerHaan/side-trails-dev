import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

interface TestimonialProperties {
  image?: React.ReactElement<typeof StaticImage>
  contact: string
  company?: string
  children: string
}

const Testimonial = ({image, contact, company, children}: TestimonialProperties) => {
  return (
    <div className="p-4 space-y-4 w-full col-span-2">
      { image
          ? <div className="w-fit m-auto rounded-2xl overflow-clip">{image}</div>
          : ""
      }
      <p className="text-center text-lg">
        {children}
      </p>
      <p className="italic text-center text-gray-400">
        {contact} {company ? `- ${company} ` : ""}
      </p>
    </div>
  )
}

export default Testimonial