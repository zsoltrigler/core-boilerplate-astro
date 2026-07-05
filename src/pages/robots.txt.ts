import type { APIRoute } from "astro"

export const prerender = true

export const GET: APIRoute = () => {
  const siteUrl = (import.meta.env.SITE as string | undefined)?.replace(/\/$/, "")

  // ! SITE env var is not set — sitemap line omitted to avoid a localhost URL in production.
  //   Set SITE in your deployment platform's environment variables (e.g. https://example.com).
  const lines = ["User-agent: *", "Allow: /"]
  const isLocalhost = siteUrl
    ? (() => {
        try {
          return ["localhost", "127.0.0.1", "::1"].includes(new URL(siteUrl).hostname)
        } catch {
          return true
        }
      })()
    : true
  if (siteUrl && !isLocalhost) {
    lines.push("", `Sitemap: ${siteUrl}/sitemap-index.xml`)
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
