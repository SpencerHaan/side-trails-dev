import type { APIRoute } from "astro"

const getRobotsTxt = (sitemapURL: URL, allow: boolean) => `\
User-agent: *
${allow ? "Allow" : "Disallow"}: /

Sitemap: ${sitemapURL.href}
`

export const GET: APIRoute = ({ site }) => {
  return (site)
    ? new Response(getRobotsTxt(new URL("sitemap-index.xml", site), import.meta.env.PUBLIC_ALLOW_ROBOTS))
    : new Response()
}
