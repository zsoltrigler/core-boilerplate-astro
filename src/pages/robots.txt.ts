import type { APIRoute } from "astro"

export const prerender = true

export const GET: APIRoute = () => {
  const siteUrl = (import.meta.env.SITE as string | undefined)?.replace(/\/$/, "")

  const lines = ["User-agent: *", "Allow: /"]
  // ! SITE env var is not set — sitemap line omitted in non-production builds.
  if (siteUrl && import.meta.env.PROD) {
    lines.push("", `Sitemap: ${siteUrl}/sitemap-index.xml`)
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
