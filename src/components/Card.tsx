import * as React from "react"

interface CardProperties {
  children?: React.ReactElement | React.ReactElement[]
}

const Card = ({children}: CardProperties) => {
  return (
    <div className="py-4 md:p-4 md:space-y-4 rounded-lg md:rounded-xl drop-shadow-lg bg-zinc-100">
      {children}
    </div>
  )
}

export default Card