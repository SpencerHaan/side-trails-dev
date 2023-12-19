import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {
  FaQuoteLeft as LeftQuote,
  FaQuoteRight as RightQuote,
} from "react-icons/fa6"
import Overlay from './Overlay'
import Content from './Content'

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
        ? <div className="m-auto rounded-2xl overflow-clip w-[128px] h-[128px] lg:w-[144px] lg:h-[144px] 2xl:w-[160px] 2xl:h-[160px]">{image}</div>
        : null
      }
      <Overlay>
        <div className="flex flex-col md:flex-row h-full justify-between items-center text-zinc-200">
          <LeftQuote className="text-5xl md:text-6xl lg:text-7xl"/>
          <RightQuote className="text-5xl md:text-6xl lg:text-7xl"/>
        </div>
        <Content className="text-center">
          {children}
        </Content>
      </Overlay>
      <div className="italic text-center text-xs md:text-sm xl:text-base 3xl:text-lg text-zinc-400">
        <div className="flex flex-wrap justify-center gap-1">
          <div>
            {contact},
          </div>
          <div>
            {role}
          </div>
        </div>
        { company ? <div>{company}</div> : null }
      </div>
    </div>
  )
}

export default Testimonial