// @ts-check
// * Turns on git rerere for this clone. rerere.enabled is a local, per-clone
//   setting (not versioned) — projects that keep a full history + `upstream`
//   remote hit the same recurring conflicts on every merge (package.json name/
//   version, .release-please-manifest.json), so this saves re-resolving them
//   by hand every time. Runs from the "prepare" script on every `pnpm install`.
//   Silently does nothing if there's no git repo yet (e.g. a ZIP/degit checkout).
import { execFileSync } from "node:child_process"
import { existsSync } from "node:fs"
import { fileURLToPath } from "node:url"

const rootDir = fileURLToPath(new URL("..", import.meta.url))

if (existsSync(`${rootDir}/.git`)) {
  try {
    execFileSync("git", ["config", "rerere.enabled", "true"], { cwd: rootDir })
  } catch {
    // * Non-fatal — don't break `pnpm install` over a config write failure.
  }
}
