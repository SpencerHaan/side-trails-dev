import * as React from "react"

interface CardProperties {
  heading?: string
  children?: React.ReactElement | React.ReactElement[]
}

const Card = ({ heading, children }: CardProperties) => {
  return (
    <div className="px-2 py-4 md:p-4 xl:p-8 space-y-4 rounded-lg md:rounded-xl drop-shadow-md md:drop-shadow-lg bg-zinc-100">
      <div className="text-center text-xl md:text-3xl 3xl:text-4xl">
        {heading}
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Card