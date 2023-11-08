import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex flex-col flex-1 justify-center items-center gap-4">
        <div className="text-3xl 3xl:text-4xl">
          Oops, it looks like you went down the wrong trail!
        </div>
        <div className="text-lg 3xl:text-xl text-zinc-400">
          Page Not Found
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not Found - Side Trails Software Development</title>
