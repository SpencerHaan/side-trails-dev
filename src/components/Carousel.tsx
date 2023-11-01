import * as React from 'react'

export interface SlideProperties {
  key: string
  children: React.ReactElement
}

export function Slide({key, children}: SlideProperties) {
  return (
    <div key={key} className="w-full p-5 flex-shrink-0 snap-start">
      {children}
    </div>
  )
}

export interface CarouselProperties {
  children: React.ReactElement<typeof Slide> | React.ReactElement<typeof Slide>[]
}

export default function Carousel({children}: CarouselProperties) {
  return (
    <div className="w-full mx-auto rounded-xl drop-shadow-lg bg-zinc-100">
      <div
        className="flex flex-row overflow-x-scroll snap-x snap-mandatory"
        style={{
          paddingBottom: "15px",
          clipPath: "inset(0 0 15px 0)",
        }}
      >
        {children}
      </div>
    </div>
  )
}
