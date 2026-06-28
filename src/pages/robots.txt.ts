import type { APIRoute } from "astro"

export const GET: APIRoute = ({ url }) => {
  return new Response(
    ["User-agent: *", "Allow: /", "Disallow: /ui/", "", `Sitemap: ${url.origin}/sitemap-index.xml`].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  )
}
