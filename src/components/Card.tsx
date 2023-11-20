import * as React from "react"

interface CardProperties {
  children?: React.ReactElement | React.ReactElement[]
}

const Card = ({children}: CardProperties) => {
  return (
    <div className="px-2 py-4 md:p-4 md:space-y-4 rounded-lg md:rounded-xl drop-shadow-md md:drop-shadow-lg bg-zinc-100">
      {children}
    </div>
  )
}

export default Card