import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

interface SeoProperties {
  title?: string
  description?: string
  children?: React.ReactElement | React.ReactElement[]
}

const Seo = ({ title, description, children }: SeoProperties) => {
  const metadata = useSiteMetadata()
  const seo = {
    ...metadata,
    title: title ? `${title} - ${metadata.title}` : metadata.title,
    description: description || metadata.description,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description}/>
      {children}
    </>
  )
}

export default Seo