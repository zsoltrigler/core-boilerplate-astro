import type { APIRoute } from "astro"
import { SITE } from "../config"

export const GET: APIRoute = () => {
  return new Response(
    ["User-agent: *", "Allow: /", "Disallow: /ui/", "", `Sitemap: ${SITE.url}/sitemap-index.xml`].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  )
}
