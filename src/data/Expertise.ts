import { IconType } from "react-icons";
import { graphql, useStaticQuery } from "gatsby";
import { AllFileQueryResult, ContentFragmentFrontmatter } from "./Types";
import { Icons } from "../utilities"

interface Expertise {
  id: string,
  title: string,
  icon: IconType,
  body: string
}

function useExpertise(): Expertise[] {
  const result = useStaticQuery<AllFileQueryResult<ContentFragmentFrontmatter>>(graphql`
  {
    allFile(
      filter: {sourceInstanceName: {eq: "expertise"}}
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
  Expertise,
  useExpertise
}
