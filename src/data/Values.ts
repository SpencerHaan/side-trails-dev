import { IconType } from "react-icons"
import { useStaticQuery, graphql } from "gatsby"
import { AllFileQueryResult, ContentFragmentFrontmatter } from "./Types"
import Icons from "../utilities/Icons"

interface Value {
  id: string
  title: string
  icon: IconType
  body: string
}

function useValues(): Value[] {
  const result = useStaticQuery<AllFileQueryResult<ContentFragmentFrontmatter>>(graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "values"}}
      sort: {childMdx: {frontmatter: {slug: ASC}}}
    ) {
      nodes {
        childMdx {
          id
          frontmatter {
            title
            icon
          }
          body
        }
      }
    }
  }`)
  return result.allFile.nodes?.map(({ childMdx }) => ({
    id: childMdx.id,
    title: childMdx.frontmatter.title,
    icon: Icons[childMdx.frontmatter.icon],
    body: childMdx.body
  })) || []
}

export {
  Value,
  useValues
}
