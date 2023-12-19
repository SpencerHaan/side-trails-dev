import * as React from "react"
import { HeadFC } from "gatsby"

const NotFoundPage = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center p-2 max-w-none text-center prose prose-sm md:prose-base xl:prose-lg 3xl:prose-xl">
      <h2>
        Oops, it looks like you went down the wrong trail!
      </h2>
      <h4 className="text-zinc-400">
        Page Not Found
      </h4>
    </div>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not Found - Side Trails Software Development</title>
