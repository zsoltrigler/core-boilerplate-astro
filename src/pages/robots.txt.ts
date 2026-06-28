import type { APIRoute } from "astro"

export const prerender = true

export const GET: APIRoute = () => {
  const site = (import.meta.env.SITE as string).replace(/\/$/, "")

  return new Response(
    ["User-agent: *", "Allow: /", "Disallow: /ui/", "", `Sitemap: ${site}/sitemap-index.xml`].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  )
}
