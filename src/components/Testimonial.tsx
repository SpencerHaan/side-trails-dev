import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {
  FaQuoteLeft as LeftQuote,
  FaQuoteRight as RightQuote,
} from "react-icons/fa6"

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
      <p className="grid">
        <div className="col-start-1 col-end-1 row-start-1 row-end-1 text-zinc-200">
          <div className="flex h-full justify-between items-center">
            <LeftQuote size={80}/>
            <RightQuote size={80}/>
          </div>
        </div>
        <div className="col-start-1 col-end-1 row-start-1 row-end-1 text-center text-xl">
          {children}
        </div>
      </p>
      <p className="italic text-center text-lg text-gray-400">
        {contact} {company ? `- ${company} ` : ""}
      </p>
    </div>
  )
}

export default Testimonial