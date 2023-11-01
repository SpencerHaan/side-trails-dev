import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export interface TestimonialCardProperties {
  contact: string,
  company: string,
  children: string,
}

export function TestimonialCard({contact, company, children}: TestimonialCardProperties) {
  return (
    <div className="p-6 space-y-4 w-full rounded-xl col-span-2 drop-shadow-xl bg-white border border-zinc-100">
      <StaticImage src="https://placehold.co/128.png" alt="" height={128} layout="fixed" className="m-auto rounded-xl"/>
      <p className="text-center text-lg">
        {children}
      </p>
      <p className="italic text-center text-gray-400">
        {contact} - {company}
      </p>
    </div>
  )
}