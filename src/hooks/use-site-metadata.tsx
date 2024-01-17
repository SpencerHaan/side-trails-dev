import { graphql, useStaticQuery } from "gatsby"

interface SiteMetadata {
  title: string
  description: string
  siteUrl: string
}

function useSiteMetadata(): SiteMetadata {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export {
  SiteMetadata,
  useSiteMetadata,
}