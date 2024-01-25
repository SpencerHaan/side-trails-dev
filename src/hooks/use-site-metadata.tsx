import { graphql, useStaticQuery } from "gatsby"

interface SiteMetadata {
  title: string
  description: string
  image: string
  siteUrl: string
}

function useSiteMetadata(): SiteMetadata {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
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