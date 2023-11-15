import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {
  FaQuoteLeft as LeftQuote,
  FaQuoteRight as RightQuote,
} from "react-icons/fa6"

interface TestimonialProperties {
  image?: React.ReactElement<typeof StaticImage>
  contact: string
  role: string
  company?: string
  children: React.ReactElement | string
}

const Testimonial = ({image, contact, role, company, children}: TestimonialProperties) => {
  return (
    <div className="pb-2 md:p-4 space-y-4 w-full">
      { image
          ? <div className="w-fit m-auto rounded-2xl overflow-clip">{image}</div>
          : ""
      }
      <div className="grid">
        <div className="text-zinc-200 col-start-1 col-end-1 row-start-1 row-end-1">
          <div className="flex flex-col md:flex-row h-full justify-between items-center">
            <div className="hidden lg:block">
              <LeftQuote size={80}/>
            </div>
            <div className="hidden lg:block">
              <RightQuote size={80}/>
            </div>
            <div className="lg:hidden">
              <LeftQuote size={60}/>
            </div>
            <div className="lg:hidden">
              <RightQuote size={60}/>
            </div>
          </div>
        </div>
        <div className="space-y-4 text-center text-sm md:text-base 3xl:text-xl col-start-1 col-end-1 row-start-1 row-end-1">
          {children}
        </div>
      </div>
      <div className="italic text-center text-sm md:text-base 3xl:text-lg text-zinc-400">
        <div className="flex flex-wrap justify-center gap-1">
          <div>
            {contact},
          </div>
          <div>
            {role}
          </div>
        </div>
        {company
          ? <div>{company}</div>
          : null
        }
      </div>
    </div>
  )
}

export default Testimonial