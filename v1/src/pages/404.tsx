import * as React from "react"
import { HeadFC } from "gatsby"
import { Content } from "../components"

const NotFoundPage = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center p-2">
      <Content className="text-center">
        <h2>
          Oops, it looks like you went down the wrong trail!
        </h2>
        <h4 className="text-zinc-400">
          Page Not Found
        </h4>
      </Content>
    </div>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not Found - Side Trails Software Development</title>
