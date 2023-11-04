import * as React from "react"

interface CardProperties {
  children?: React.ReactElement | React.ReactElement[]
}

const Card = ({children}: CardProperties) => {
  return (
    <div className="p-4 space-y-4 rounded-xl drop-shadow-lg bg-zinc-100">
      {children}
    </div>
  )
}

export default Card