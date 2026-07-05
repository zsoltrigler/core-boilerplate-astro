import type { APIRoute } from "astro"

export const prerender = true

export const GET: APIRoute = () => {
  const siteUrl = (import.meta.env.SITE as string | undefined)?.replace(/\/$/, "")

  // ! SITE_URL env var is not set — sitemap line omitted to avoid a localhost URL in production.
  //   Set SITE_URL in your deployment platform's environment variables.
  const lines = ["User-agent: *", "Allow: /"]
  if (siteUrl && !siteUrl.startsWith("http://localhost")) {
    lines.push("", `Sitemap: ${siteUrl}/sitemap-index.xml`)
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
