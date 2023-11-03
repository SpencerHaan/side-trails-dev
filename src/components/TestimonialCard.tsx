import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export interface TestimonialCardProperties {
  image: React.ReactElement<typeof StaticImage>
  contact: string
  company: string
  children: string
}

export function TestimonialCard({image, contact, company, children}: TestimonialCardProperties) {
  return (
    <div className="p-4 space-y-4 w-full col-span-2">
      <div className="w-fit m-auto rounded-2xl overflow-clip">
        {image}
      </div>
      <p className="text-center text-lg">
        {children}
      </p>
      <p className="italic text-center text-gray-400">
        {contact} - {company}
      </p>
    </div>
  )
}