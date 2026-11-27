import { existsSync, readdirSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { join } from "node:path"

// * Only deploy/CI environments warn; a local build never does.
const ON_HOST = () =>
  Boolean(process.env.CI || process.env.WORKERS_CI || process.env.VERCEL || process.env.NETLIFY)

/** True when Astro's image cache (`<cacheDir>/assets`) is missing or empty. */
export function isImageCacheCold(cacheDir) {
  const dir = join(fileURLToPath(cacheDir), "assets")
  return !existsSync(dir) || readdirSync(dir).length === 0
}

/** Astro integration: warns (never fails) when a CI/deploy build starts with an empty image cache. */
export function imageCacheNotice() {
  let cacheDir
  return {
    name: "image-cache-notice",
    hooks: {
      "astro:config:done": ({ config }) => {
        cacheDir = config.cacheDir
      },
      "astro:build:start": ({ logger }) => {
        if (ON_HOST() && cacheDir && isImageCacheCold(cacheDir)) {
          logger.warn(
            "Image cache is empty: every picture is encoded from scratch. Turn on the host's build cache (Cloudflare: Workers Builds → Settings → Build cache) so node_modules/.astro/assets is kept between builds."
          )
        }
      },
    },
  }
}
