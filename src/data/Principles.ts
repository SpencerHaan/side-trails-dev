import { IconType } from "react-icons";
import { graphql, useStaticQuery } from "gatsby";
import { AllFileQueryResult, ContentFragmentFrontmatter } from "./Types";
import Icons from "../utilities/Icons";

interface Principle {
  id: string,
  title: string,
  icon: IconType,
  body: string
}

function usePrinciples(): Principle[] {
  const result = useStaticQuery<AllFileQueryResult<ContentFragmentFrontmatter>>(graphql`
  {
    allFile(
      filter: {sourceInstanceName: {eq: "principles"}}
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
  }`
  )
  
  return result.allFile.nodes?.map(({ childMdx }) => ({
    id: childMdx.id,
    title: childMdx.frontmatter.title,
    icon: Icons[childMdx.frontmatter.icon],
    body: childMdx.body
  })) || []
}

export {
  Principle,
  usePrinciples
}
