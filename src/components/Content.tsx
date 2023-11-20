import * as React from "react"

interface ContentProperties {
  children?: React.ReactElement | React.ReactElement[]
}

const Content = ({children}: ContentProperties) => {
  return (
    <div className="m-3 sm:m-auto sm:w-5/6 md:w-5/6 lg:w-3/4 2xl:w-3/5 3xl:w-1/2">
      {children}
    </div>
  )
}

export default Content