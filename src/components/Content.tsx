import * as React from "react"

interface ContentProperties {
  className?: string
  children?: string | React.ReactElement | React.ReactElement[]
}

const Content = ({ className, children }: ContentProperties) => {
  return (
    <div className={`max-w-none prose prose-sm md:prose-base xl:prose-lg 3xl:prose-xl ${className}`}>
      {children}
    </div>
  )
}

export default Content