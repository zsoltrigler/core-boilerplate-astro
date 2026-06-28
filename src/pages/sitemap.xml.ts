import type { APIRoute } from "astro"

// * Pages to include in the sitemap. /ui is excluded — developer-facing only.
const pages = ["/", "/404"]

export const GET: APIRoute = ({ url }) => {
  const origin = url.origin

  const urls = pages
    .map(
      (page) => `
  <url>
    <loc>${origin}${page}</loc>
  </url>`
    )
    .join("")

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`,
    { headers: { "Content-Type": "application/xml" } }
  )
}
