import { ImageDataLike } from "gatsby-plugin-image"

export interface Image {
  source: ImageDataLike
  alt: string
}

export interface AllFileQueryResult<T> {
  allFile: {
    nodes: {
      childMdx: {
        id: string,
        frontmatter: T
        body: string
      }
    }[]
  }
}

export interface ContentFragmentFrontmatter {
  title: string
  icon: string
}
