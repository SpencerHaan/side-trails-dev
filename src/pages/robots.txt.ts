import type { APIRoute } from "astro"

const getRobotsTxt = (sitemapURL: URL, allow: boolean) => `\
User-agent: *
${allow ? "Allow" : "Disallow"}: /

Sitemap: ${sitemapURL.href}
`

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  return new Response(getRobotsTxt(sitemapURL, import.meta.env.PUBLIC_ALLOW_ROBOTS));
}
