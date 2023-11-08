import * as React from 'react'

export interface SectionProperties {
  title: string
  subtitle?: string
  className?: string
  children: React.ReactElement | React.ReactElement[]
}

const Section = ({title, subtitle, className, children}: SectionProperties) => {
  return (
    <div className={"py-12 space-y-6 " + className}>
      <p className="text-center text-4xl 3xl:text-5xl">
        {title}
      </p>
      <div className="w-3/5 3xl:w-1/2 m-auto space-y-8">
        { subtitle
          ? <p className="pb-2 3xl:pb-4 text-base 3xl:text-lg text-center text-zinc-400">{subtitle}</p>
          : ""
        }
        {children}
      </div>
    </div>
  )
}

export default Section