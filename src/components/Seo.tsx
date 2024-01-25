import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

interface SeoProperties {
  title?: string
  description?: string
  imageUrl?: string
  pathname?: string
  children?: React.ReactElement | React.ReactElement[]
}

const Seo = ({ title, description, imageUrl, pathname, children }: SeoProperties) => {
  const metadata = useSiteMetadata()
  const seo = {
    ...metadata,
    title: title ? `${title} - ${metadata.title}` : metadata.title,
    description: description || metadata.description,
    image: `${metadata.siteUrl}${imageUrl || metadata.image}`,
    url: `${metadata.siteUrl}${pathname || ""}`
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description}/>
      <meta name="image" content={seo.image} />
      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={title}></meta>
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {children}
    </>
  )
}

export default Seo