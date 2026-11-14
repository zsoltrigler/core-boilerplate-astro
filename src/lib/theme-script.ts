// * Theme FOUC-prevention script, shared by BaseLayout.astro (which inlines it
//   into <head>) and astro.config.mjs (which hashes it into the CSP).
// ! Astro's CSP only hashes *bundled* scripts. This one must stay an inline
//   classic script (a deferred module would run after first paint and flash the
//   wrong theme), so its sha256 is added to `security.csp.scriptDirective.hashes`
//   instead. The hash covers this exact string — change one character and the
//   browser blocks the script; the config recomputes it on every build.
export const THEME_SCRIPT = `;(function(){try{var s=localStorage.getItem("theme"),d=window.matchMedia("(prefers-color-scheme: dark)").matches;if(s==="dark"||(!s&&d))document.documentElement.classList.add("dark")}catch(_){}})()`
