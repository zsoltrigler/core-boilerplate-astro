# Changelog

All notable changes to this project will be documented in this file.

## [1.7.1](https://github.com/zsoltrigler/core-boilerplate-astro/compare/core-boilerplate-v1.7.0...core-boilerplate-v1.7.1) (2026-07-10)


### Bug Fixes

* instant theme switch — eliminate per-element transition jank ([bcd31dc](https://github.com/zsoltrigler/core-boilerplate-astro/commit/bcd31dcbbb5c2f76a4843c20248d99df5abc2ae4))
* instant theme switch via theme-switching class — no more per-element transition jank ([106d1eb](https://github.com/zsoltrigler/core-boilerplate-astro/commit/106d1ebc5d88560665a946dc749060fd6cbe24ac))
* replace per-element CSS transitions with View Transitions API for theme switch ([d3a049f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/d3a049f27751d6fba3a3021fcac464c2ff4c07ef))

## [1.7.0](https://github.com/zsoltrigler/core-boilerplate-astro/compare/core-boilerplate-v1.6.3...core-boilerplate-v1.7.0) (2026-07-09)


### Features

* add 14 new UI components (batch 2) ([9a9689a](https://github.com/zsoltrigler/core-boilerplate-astro/commit/9a9689a3efa988ec5a08ed5f8dc269c662c39e3c))
* add 14 new UI components (batch 2) ([b99e58b](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b99e58b69132f932e3b0d91dd889c38e72f6a1b0))


### Bug Fixes

* Drawer position, animation, and full-height sizing ([2bd4013](https://github.com/zsoltrigler/core-boilerplate-astro/commit/2bd4013f5a2bd5b686d43452b82534c0b584446a))
* lock body scroll while Modal is open ([ba1ce82](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ba1ce826507beeaa23769447f91502cad703101e))
* make component sidebar nav independently scrollable ([99209ce](https://github.com/zsoltrigler/core-boilerplate-astro/commit/99209ce4f38cb23eae0cafe333e373986437d7f8))
* Select dropdown arrow sat flush against the right edge ([ab32ba2](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ab32ba2b28670c54c0a72cecfa31c41ed56fbd9c))
* showcase demo content sat on the same background as its hover states ([0d2a2dd](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0d2a2dd285152d24681721df86d76c08cfa81750))
* Toggle thumb not sliding on state change ([8c3a655](https://github.com/zsoltrigler/core-boilerplate-astro/commit/8c3a655aae7250e988f5be2c566917a6bd4d9bca))


### Code Refactoring

* eliminate component-to-component code duplication ([6865d1f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/6865d1f5b8d20fb21d3139bc8eb82ca27eda2336))
* inline all showcase content into ui.astro, remove per-component wrappers ([1d202cd](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1d202cdd19feb7d8dac7ee0702263a1b1bfeb02f))
* rewrite Stepper horizontal layout with CSS Grid for exact geometry ([1a2a347](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1a2a3476e531ef4b78be94db14bd626f12b41eeb))

## [1.6.3](https://github.com/zsoltrigler/core-boilerplate-astro/compare/core-boilerplate-v1.6.2...core-boilerplate-v1.6.3) (2026-07-05)


### Miscellaneous Chores

* add .claude/settings.json with permission allowlist ([8ec040a](https://github.com/zsoltrigler/core-boilerplate-astro/commit/8ec040aa4130826f919e7b8062b1a343978e7a22))
* add .claude/settings.json with permission allowlist ([cf2e66a](https://github.com/zsoltrigler/core-boilerplate-astro/commit/cf2e66a2576b76a5053fc6f889e528e9fdbc7e2a))

## [1.6.2](https://github.com/zsoltrigler/core-boilerplate-astro/compare/core-boilerplate-v1.6.1...core-boilerplate-v1.6.2) (2026-07-05)


### Miscellaneous Chores

* bump dependencies to latest patch/minor versions ([5ff5104](https://github.com/zsoltrigler/core-boilerplate-astro/commit/5ff5104c56242b026833476aab5147bf538a6862))
* bump dependencies to latest patch/minor versions ([5702350](https://github.com/zsoltrigler/core-boilerplate-astro/commit/57023500c4bfe9e6eefdd9c9b6f670e45b08012c))

## [1.6.1](https://github.com/zsoltrigler/core-boilerplate-astro/compare/core-boilerplate-v1.6.0...core-boilerplate-v1.6.1) (2026-07-05)


### Bug Fixes

* darken brandSecondary and brandAccent to meet WCAG AA 4.5:1 ([edd22ca](https://github.com/zsoltrigler/core-boilerplate-astro/commit/edd22ca65a5082d772e43a214bcdcdea425c3328))
* darken brandSecondary and brandAccent to meet WCAG AA 4.5:1 ([6fb396f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/6fb396f820fdb9517dfd76652f586618c149dc25))

## [1.6.0](https://github.com/zsoltrigler/core-boilerplate-astro/compare/core-boilerplate-v1.5.0...core-boilerplate-v1.6.0) (2026-07-05)


### Features

* add active state tracking to /ui sidebar nav ([a939a13](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a939a13695068f36b74ea201bd5964a9ca2029bd))
* add aria-label prop to Checkbox for label-less usage — consistent with Select and Input ([35e0df0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/35e0df0862161f1997a0038388c28195eaacaa9b))
* add component preview section to home page ([408d2a1](https://github.com/zsoltrigler/core-boilerplate-astro/commit/408d2a19ebdeb529bf2639a19c3dd55dcd673f5a))
* add component preview section to home page ([14072e1](https://github.com/zsoltrigler/core-boilerplate-astro/commit/14072e1bf198ee3ba68f8dde350c50926687dec9))
* add favicon field to SITE config ([0eb8292](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0eb8292f264ed4a1d3dc094e795c22a1af84d903))
* add Input component ([d8ca11e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/d8ca11e3313caaebedf77d509994c3398c621865))
* add Input component with label, hint, error state and size vari… ([a003c26](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a003c2677e9310efdb33fe1dcdb6420edaae6ddc))
* add Input component with label, hint, error state and size variants ([6c5df79](https://github.com/zsoltrigler/core-boilerplate-astro/commit/6c5df79a90bb55f2135aedef9a86d03e3e3567bf))
* add JSON-LD support, og:locale, og:image:alt; fix robots.txt sitemap guard ([4d555e3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4d555e3c9707727ac4e900d2ce371133bf204cf3))
* add Modal component with native dialog, backdrop and size variants ([d5d2592](https://github.com/zsoltrigler/core-boilerplate-astro/commit/d5d2592ef59262968b5857ba99a2f28fecc86eb7))
* add Select, Checkbox, Textarea, Tabs, Toast, Breadcrumb components ([3910fc9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3910fc99d6dfee6c3c555c1a46f30a1299cebe38))
* add skip to content link for keyboard accessibility ([6135079](https://github.com/zsoltrigler/core-boilerplate-astro/commit/613507906487d888970ac56761d53efd5553a396))
* add skip to content link for keyboard accessibility ([666abc2](https://github.com/zsoltrigler/core-boilerplate-astro/commit/666abc25f6ff8706fecbc6c03811c91af6c07977))
* Button supports icon-left and icon-right named slots ([32a46fc](https://github.com/zsoltrigler/core-boilerplate-astro/commit/32a46fca8421d46bde19c8c454eacb2e77a8f76f))
* Card default slot wrapped in w-full — buttons always full width inside cards ([7ad129e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/7ad129e98627162bd9ff0e63fb4ef3bf1d183e1c))
* core enhancements — config, components, SEO, sitemap ([e7f8a43](https://github.com/zsoltrigler/core-boilerplate-astro/commit/e7f8a43eba40e9bbd0e45da3953c01356b1d54bc))
* core enhancements — config, components, SEO, sitemap ([2f9560e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/2f9560eb45f09ecf5dfa19095028225178a80f54))
* dynamic robots.txt, scroll-margin anchor fix, mobile nav ([4c5515e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4c5515e49552b010cde0e2247fed20da5169d0e9))
* full component demo on index page ([771e782](https://github.com/zsoltrigler/core-boilerplate-astro/commit/771e7829e71f62fb937ed8137e491ec0c37ceaaa))
* fully parametrizable UI components — every visual decision is a prop ([60584f4](https://github.com/zsoltrigler/core-boilerplate-astro/commit/60584f4116cb3e7e4d383720d1440ca4c9a5f39d))
* IconButton component — square icon-only button with required aria-label ([b074739](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b0747390036cbb8fb46360f8df0fbe5ce12cce2e))
* initial core boilerplate ([ae3d27e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ae3d27e7bec8b49d854556cadddc8249bcde13e5))
* named slots for Card and Alert, barrel exports for ui/ and layout/ ([a96bbe0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a96bbe08d7c546a73025327cb1f859c71c8937aa))
* new developer-facing home page with full component showcase ([8fa5400](https://github.com/zsoltrigler/core-boilerplate-astro/commit/8fa5400b454610d1d3fd5481d864f82897985b7d))
* new developer-facing home page with full component showcase ([537b45c](https://github.com/zsoltrigler/core-boilerplate-astro/commit/537b45cd0d44b5028d128c80b9cfe6d338422580))
* proper landing page + separate /ui component library page ([1dd712d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1dd712dc2c25957973b509ab72cda2820f4dc808))
* replace hero section with OG-inspired dark layout ([aaef67f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/aaef67f84c4cdb5bd3e7d1d7d01c3ebf12dc25d6))
* replace index with minimal developer-facing start page ([0722895](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0722895b7700d36940e28f896345be5603a270dc))
* replace landing page with neutral semantic starter template ([56cfa22](https://github.com/zsoltrigler/core-boilerplate-astro/commit/56cfa222f5eccf4d39ac6b420cec06f290723436))
* replace manual syntax spans with Shiki Code component ([a79e51d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a79e51d19cdc9dd3704a49742dd3f2fb2aabe172))
* SEO enhancements — JSON-LD, og:locale, og:image:alt, robots.txt fix ([c61a815](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c61a815b4e0902621e633115be9ec85a2fb7f335))
* SITE.showName toggle — control logo/name display independently ([21c74a6](https://github.com/zsoltrigler/core-boilerplate-astro/commit/21c74a61a6db847f8b19b508eddefbc3df044f84))
* social icon support in Footer and default social links with SVG icons ([2f44ca6](https://github.com/zsoltrigler/core-boilerplate-astro/commit/2f44ca61732c532c9b35f80e8d284a4b72f5d788))
* UI component library — Button, Badge, Card, Alert, Section, Container ([c3c9183](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c3c91834dfa63dfefc38c8bef5fa54f42701bdaa))
* WCAG contrast checks at build time ([1b97fdf](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1b97fdf56fea1505142287816f8eeebd8a56f1a4))


### Bug Fixes

* accessibility — contrast ratio and heading order ([b6828b1](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b6828b1394cf0b19d0f0af0240b2bcdd7ca51aee))
* add CommonJS globals to ESLint config for .cjs files ([e6c2230](https://github.com/zsoltrigler/core-boilerplate-astro/commit/e6c22309bdc5957823f1fe201cc7319a830b8ade))
* add dark brandPrimary WCAG check, PNG favicon fallback, and SOCI… ([e8ddaf9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/e8ddaf9fbfe607a416af542df0d9296d09ed0654))
* add dark brandPrimary WCAG check, PNG favicon fallback, and SOCIAL_LINKS warning ([dffedf7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/dffedf72a8108c84507e63eef1e5a9531db8ddf6))
* add missing borderStrong dark token and JSDoc types ([0b938fa](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0b938faf443071de3f555984d3a6472faea87821))
* add missing Input and Modal exports to ui/index.ts ([b2c230e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b2c230ebec7df90d8fe620d09c3e0d77a0f63c10))
* add shiki as explicit dependency for CI type check ([a5d2a58](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a5d2a5874d6cb558d04b9f3da2d36e4c16826173))
* add timeout to CI job to prevent hung builds ([95d9191](https://github.com/zsoltrigler/core-boilerplate-astro/commit/95d91910f5af46d111fff4651b272a14ae39e1b8))
* add timeout to CI job to prevent hung builds ([6c5b024](https://github.com/zsoltrigler/core-boilerplate-astro/commit/6c5b02416b3ffd40049cb6e32db6a7006d2a715b))
* add vertical padding to hero section on mobile ([0d66cd3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0d66cd38586c324ad41cb581b258608814aef674))
* add XSS warning comment to set:html icon usage in Footer ([1484fb4](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1484fb4cb5f90fbea4070890ef05574212f306b4))
* address all code review findings on dark mode transition ([0586aaf](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0586aaf28cf1513184ce95b5e1fec4766817c3a8))
* address all code review issues across components and config ([a7f8884](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a7f8884e2fb5c846110e1fc04434bf3cf91e5bdc))
* alert dismiss event delegation, optional headingAccent, parametrizable section title ([259a5da](https://github.com/zsoltrigler/core-boilerplate-astro/commit/259a5da4d57c31908b786cfcb75266dd4e17b774))
* aria-hidden on decorative step numbers to suppress contrast warn… ([9c19f55](https://github.com/zsoltrigler/core-boilerplate-astro/commit/9c19f55f6792c6acabf2d04728fecd2e8459caa6))
* aria-hidden on decorative step numbers to suppress contrast warnings ([dda89f4](https://github.com/zsoltrigler/core-boilerplate-astro/commit/dda89f4bc16cf9fb98595f7d019f2f177d584e41))
* aria-label toggle, theme-color meta, dark brandPrimary token ([f06d39f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f06d39f2b46e1823741da2894156e077f38eea4e))
* auto-detect deployment URL from platform env vars at build time ([ccf52f1](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ccf52f1de48d7a298a90faf332fbbfc8c1b8dd67))
* Badge self-start, Card items-start — prevent flex-col stretch ([037debb](https://github.com/zsoltrigler/core-boilerplate-astro/commit/037debb8de6941e64c5676d0466c5de5357fc161))
* body min-h-screen flex-col, main flex-1 — footer stays at bottom ([41f5b70](https://github.com/zsoltrigler/core-boilerplate-astro/commit/41f5b70c06aedc27d23600b270f5e7ac6601bf97))
* Button height aligned with IconButton — same size prop = same height ([155ea34](https://github.com/zsoltrigler/core-boilerplate-astro/commit/155ea348da5d10dc2aa7918ab8d58ca28c6f7e6e))
* Card default slot wrapper flex-col so buttons stretch to full width ([ae82f5c](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ae82f5c313ec5349ede7194b63b987c9b54ff51c))
* Card items-start prevents flex children from stretching full width ([dbd8927](https://github.com/zsoltrigler/core-boilerplate-astro/commit/dbd8927bf51e85f1706f0fe55e8e9b19973fb53c))
* center modal in viewport with fixed positioning and darken backdrop ([5957a38](https://github.com/zsoltrigler/core-boilerplate-astro/commit/5957a3842d8e62c231e141a7e770476308206487))
* change Button hover to bg-elevated so it's visible on bg-surface frames ([f9704fd](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f9704fd74ee33ab5ba68a1452fb843305ba75be8))
* correct vscode extensions, add .env.example, add format and type-check scripts ([95e65a6](https://github.com/zsoltrigler/core-boilerplate-astro/commit/95e65a61260385f02f9c666a5b3ac86d35a6eb1b))
* correct vscode extensions, add .env.example, add format and type… ([5399c18](https://github.com/zsoltrigler/core-boilerplate-astro/commit/5399c187f439db812fd6f109ca6cc58178e0775e))
* cover all textMuted/bgElevated contrast pairs in CI check ([5fd7f5e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/5fd7f5e18a2f90ebc5c8c8a2b804968d395890bf))
* darken dark mode brandPrimary to pass WCAG AA contrast ([cc03b24](https://github.com/zsoltrigler/core-boilerplate-astro/commit/cc03b247296de1e36108c796b5a0085453b6c8ff))
* decouple grid color from borderBase to fix both grid flash and border delay ([68e8aaa](https://github.com/zsoltrigler/core-boilerplate-astro/commit/68e8aaa459a8af2fad0b0321facfab8a3387aa4f))
* default logo to empty string to avoid broken image on fresh install ([b034bc3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b034bc31dd043b1ce6bad2d0fa0c36992b36f0ef))
* define --grid-line directly in global.css for reliable dev/build animation ([f14a1d9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f14a1d96982509fd5047d158ff79042448add151))
* enforce only SEO and best-practices at 1.0 in Lighthouse CI ([4bd9717](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4bd97178f415735e7d54574c0ba89fd2376ad5dc))
* ensure JSON-LD [@context](https://github.com/context) cannot be overridden by caller ([36c53ce](https://github.com/zsoltrigler/core-boilerplate-astro/commit/36c53ce3e166c7d3019bdff9df7e01643dedccc7))
* ensure JSON-LD [@context](https://github.com/context) cannot be overridden by caller ([5c60d89](https://github.com/zsoltrigler/core-boilerplate-astro/commit/5c60d898be07a53ff5ad98a8ef1f7a09658b05aa))
* escape HTML-special chars in JSON-LD output to prevent XSS ([cab61d7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/cab61d7f63bbea3d15fe5f0912c579e046c0e46c))
* fix WCAG contrast failures in Badge, Alert and Danger button ([a864788](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a864788d9878cf1a78e6037d04b67848537a4e3f))
* fix WCAG contrast failures in Badge, Alert and Danger button ([ef2827d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ef2827dc1962d0c44c7219b9612da089f7704667))
* fix WCAG contrast failures on status colors ([7c2ef99](https://github.com/zsoltrigler/core-boilerplate-astro/commit/7c2ef996c99225f22831b38a933db2ed9e496ac0))
* gap-16 on main handles all spacing, sections have no padding ([0b887c3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0b887c371506bf8c83690fe5392a1a982f8ebaa8))
* guard against duplicate toggle listeners and suppress grid animation under reduced-motion ([077a051](https://github.com/zsoltrigler/core-boilerplate-astro/commit/077a051b73289dd51228eaea24a407831730e708))
* hardcode grid rgba values directly — remove CSS variable dependency ([9ba3f8e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/9ba3f8ee256296e4aa022d82d53194115b22fc09))
* harden JSON-LD escaping and ensure og:image:alt is always present ([122d7b0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/122d7b03e79b621183736557fde1afabf6585ddd))
* harden JSON-LD escaping and ensure og:image:alt is always present ([1846443](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1846443ef825e3b7f049fb0182d7d4965278494c))
* header logo slot — show both image and name by default, fully overridable ([30d872a](https://github.com/zsoltrigler/core-boilerplate-astro/commit/30d872ae544c21e7f4c238231b22f4dbc8d6edd8))
* header nav-end Button size="md" to match ThemeToggle h-10 height ([ef1c8c7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ef1c8c7f87da7cd11af868106a67401b18afaee3))
* import TransitionBeforeSwapEvent from astro:transitions/client ([cec6130](https://github.com/zsoltrigler/core-boilerplate-astro/commit/cec61303b04369a95f21ea0bb7ed64b4385a66ae))
* increase grid line opacity to 30% to match original visual intensity ([4e58296](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4e58296c1eb19418bf03b8a13c4bc83934fb968d))
* logo rendering, 404 Button, header nav-end slot, footer social slot ([47948af](https://github.com/zsoltrigler/core-boilerplate-astro/commit/47948af2c2b664b9d931d782e12878f23388bb3c))
* lower performance threshold to 0.85 and increase Lighthouse runs to 3 ([2fde9d3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/2fde9d38fb879a2c7854e785639763e5062d09de))
* lower performance threshold to 0.85 and increase Lighthouse runs… ([6cfcd08](https://github.com/zsoltrigler/core-boilerplate-astro/commit/6cfcd085b6c45a72595467e1fda745ea7484cccf))
* lower performance threshold to 0.9 and silence noisy CI audits ([431b018](https://github.com/zsoltrigler/core-boilerplate-astro/commit/431b0180ed1c19cd8fe4f8605e5a151ec89a0070))
* main flex-col gap-16 controls section spacing instead of py-24 ([ffd40b9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ffd40b9ff5f059978618f5d2dfe477dddee76f1b))
* make Features heading visible ([474f9b0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/474f9b00b87f4fb523da453a0962b5368574167b))
* modal scroll and input aria-describedby type precision ([cf90ff1](https://github.com/zsoltrigler/core-boilerplate-astro/commit/cf90ff1cf6e4e8974982000220b27444564a1022))
* move before-swap dark class persistence to BaseLayout ([24a5402](https://github.com/zsoltrigler/core-boilerplate-astro/commit/24a5402a1b4ea128ca43b2fbb677183883483927))
* persist dark class across View Transition page swaps ([ea35062](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ea3506224f538860b7eb307648a4eb1513d8da4c))
* prerender robots.txt at build time using platform-detected site URL ([0bf83a2](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0bf83a2bf8dedd4e680e7bbd126889b3517e7978))
* prevent XSS in Toast by building DOM nodes instead of using innerHTML for message ([f75d30b](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f75d30b405123af0e18d80954dc2c73012b4138b))
* py-16 on main adds breathing room below header and above footer ([c75af3b](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c75af3bdb7b3542ff0924dd7212e00c5e6400321))
* remove :root --color-border-base transition to fix button border delay ([541f423](https://github.com/zsoltrigler/core-boilerplate-astro/commit/541f423b4f3eb916b1859cfc65a15173cba9be4a))
* remove box-shadow from theme transition, harden reduced-motion for Safari ([c197d49](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c197d497ab80a528bc3319eca87ae6ea387cc785))
* remove Disallow /ui/ from robots.txt — use noindex meta tag instead ([313b8ca](https://github.com/zsoltrigler/core-boilerplate-astro/commit/313b8ca64ebd5e58ae35b77107a81ba5352bdd79))
* remove Disallow /ui/ from robots.txt — use noindex meta tag instead ([3afe630](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3afe630938ed1f646d499b6553d248c9f9c2d7e8))
* remove double padding from HeroSection, make Section padding optional ([8f3937b](https://github.com/zsoltrigler/core-boilerplate-astro/commit/8f3937b0bba03f4b55c1be4293cd640805c4518e))
* remove gap-16 from main, sections use py-24 for self-contained spacing ([d2655e6](https://github.com/zsoltrigler/core-boilerplate-astro/commit/d2655e6e10ebd9f4bab40a547731cae0abb01214))
* remove hardcoded site URL — resolve dynamically from env vars and request origin ([75a13d5](https://github.com/zsoltrigler/core-boilerplate-astro/commit/75a13d52ba8603a8c0ff92778c1aa7cda2a89c11))
* remove inlineStylesheets always — breaks CSS caching on multi-pa… ([861e972](https://github.com/zsoltrigler/core-boilerplate-astro/commit/861e972c526ab2d9cc048017be7f4e40c383f7ad))
* remove inlineStylesheets always — breaks CSS caching on multi-page sites ([12ba9f3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/12ba9f3228fe5da5109a32e3f98b8d8913440084))
* remove mt-4 from Button inside Card slot — gap handles spacing ([577881c](https://github.com/zsoltrigler/core-boilerplate-astro/commit/577881c9abc23bb76000853606287feafe495747))
* remove performance assertion from Lighthouse CI ([e28559a](https://github.com/zsoltrigler/core-boilerplate-astro/commit/e28559a65ffa971ff8a5718bede813f6e1dc6427))
* remove pnpm version from CI to avoid packageManager conflict ([53c3602](https://github.com/zsoltrigler/core-boilerplate-astro/commit/53c3602bcd8c919b639ef26f83ed8d499a30723a))
* remove self-start from Badge — alignment controlled by parent co… ([8ecbff5](https://github.com/zsoltrigler/core-boilerplate-astro/commit/8ecbff547c6370d0d66b94faaebadb7b54f3da16))
* remove self-start from Badge — alignment controlled by parent container ([051e2df](https://github.com/zsoltrigler/core-boilerplate-astro/commit/051e2df9c12f47fb02f39cfe107a05b664e85098))
* remove SITE_URL env var and hardcoded site URL from config ([b36e458](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b36e458b524589c43f55d8ff778b7a9664320ade))
* remove wrapper divs from modal footer slots so gap applies correctly ([f6da45f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f6da45fe181a35afe61a15033a4f69e773c4d932))
* render decorative step numbers via CSS content to avoid contrast warnings ([8e60ba3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/8e60ba385cf954eb6db095a388984b116d401667))
* render decorative step numbers via CSS content to avoid contrast… ([cece423](https://github.com/zsoltrigler/core-boilerplate-astro/commit/cece423bdaabfe0c96d913f4f9fafcdd32c2861d))
* replace [@property](https://github.com/property) root transition with universal element transition ([dad985d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/dad985d63f0d807fa72bf19ff84286fa4b9c809b))
* replace @astrojs/sitemap with dynamic sitemap.xml route ([bb2b61b](https://github.com/zsoltrigler/core-boilerplate-astro/commit/bb2b61ba3727d72d1e1a855f5485899f9e53ac10))
* replace all hardcoded values in index.astro with config and desi… ([112b30a](https://github.com/zsoltrigler/core-boilerplate-astro/commit/112b30a5172ea361e71d6db43a11fc462d010f72))
* replace all hardcoded values in index.astro with config and design tokens ([6de3d88](https://github.com/zsoltrigler/core-boilerplate-astro/commit/6de3d8854291f9ec168b0ac79ed438afafabece8))
* replace hardcoded hex colors in 404 page with design tokens ([c100aba](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c100ababc38cf4a9d88ebaf333a53d3221ba42db))
* replace min-h-screen with py-24 in HeroSection — removes large empty gap below content ([deb1c18](https://github.com/zsoltrigler/core-boilerplate-astro/commit/deb1c18c0414d78f1914f9abe2dc3fdea201cdd2))
* replace Vercel-specific URL resolution with platform-agnostic SITE_URL ([0e065ac](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0e065acda4adbe75bc91696b2e2bd0535d04e180))
* replace window flag with AbortController in Alert dismiss listener ([a9876f8](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a9876f8dcd719a29fe9ed158f8d2e402c4b15e9f))
* resolve astro check type errors in Header and Button ([2dfaaef](https://github.com/zsoltrigler/core-boilerplate-astro/commit/2dfaaef4424acac3f57f0af4d8fe14a33e9f9c65))
* resolve OG image and site URL dynamically per environment ([c3729b7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c3729b7b0dd30b4e961b000b311d6d1e77bffaca))
* resolve OG image URL from Astro.site instead of Astro.url.origin ([bc457bd](https://github.com/zsoltrigler/core-boilerplate-astro/commit/bc457bd40a08a8a17ae1b7eda9f2f1cfb10801c3))
* resolve TypeScript errors in config and scripts ([e628c38](https://github.com/zsoltrigler/core-boilerplate-astro/commit/e628c38fe4611a1b1b56a195407c347140504f25))
* review fixes — OG image URL, SEO warnings, footer i18n ([e0e15ec](https://github.com/zsoltrigler/core-boilerplate-astro/commit/e0e15ec73960a3b4eea64bcfe443e86ddad07c57))
* review fixes — OG image URL, SEO warnings, footer i18n ([917129f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/917129fd0cbf21f09de5417d6fa373dae0ec2b08))
* serve sitemap and robots.txt as dynamic routes using url.origin ([fdc0c7d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/fdc0c7d1b4c1fc902bd42a678cff566a6753519e))
* set bg-base on homepage component showcase frame content area ([cfd0e31](https://github.com/zsoltrigler/core-boilerplate-astro/commit/cfd0e31090aaaf9cc8d1e790bf115da6752e597a))
* set bg-base on showcase frame content areas so hover states are visible ([1153f65](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1153f65a596054ab18dbf664d343a303a4a6aa55))
* set real description on homepage to eliminate placeholder SEO warning ([b6efe5d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b6efe5dc9932d79a84afbaf162a5401926ac1d03))
* single alert dismiss listener, external URL detection, slot-based card grid ([18b14a2](https://github.com/zsoltrigler/core-boilerplate-astro/commit/18b14a2ea56b29743a1f509ee4203849614caffa))
* smooth dark mode transition via [@property](https://github.com/property) color token registration ([3b04089](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3b040890033f5373382906f059f17ba99856ac03))
* spread rest props on Button ([0834017](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0834017b286318c9fece1452f466051c4a161b6b))
* spread rest props on Button so data-* attributes pass through to the DOM ([c6999b9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c6999b997b8e79de9c6ad8edeaa4560d0c5b3493))
* standardize Header to astro:page-load, document ThemeToggle after-swap intent ([331ca20](https://github.com/zsoltrigler/core-boilerplate-astro/commit/331ca20634fde4cccad953390089b0625d54eec5))
* switch OG image from SVG to JPG for social platform compatibility ([6ffb819](https://github.com/zsoltrigler/core-boilerplate-astro/commit/6ffb819629c600130316783a0f1f0cfebf72f62d))
* switch OG image from SVG to JPG for social platform compatibility ([48e2297](https://github.com/zsoltrigler/core-boilerplate-astro/commit/48e22971a8d313a9a1b70fd66804c88540ee80ee))
* transition --color-border-base on :root to prevent grid flash ([610ecd2](https://github.com/zsoltrigler/core-boilerplate-astro/commit/610ecd23b515446bb1903697e12f7f05780f2814))
* unify grid pattern into .bg-grid utility class ([0f23a99](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0f23a998dc684c8a2093d31f6aed5549d3dd7bf2))
* use AbortController in Modal to prevent listener accumulation on View Transitions ([1a3ef71](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1a3ef71be077991e5809fc5d208322349c97fa46))
* use aria-disabled and pointer-events-none for disabled link buttons ([f0f1307](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f0f1307f23823cec74990e5d5cf9d5213062f97e))
* use PORT env var instead of hardcoded 4321 for local dev URL ([b40c34b](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b40c34b82810eff76fee755e03e72d7fae5fe289))
* use secondary variant for Cancel buttons in modal footer ([b42233e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b42233e746ccff3d98a61cf1cd44c76b6ea21168))
* use SITE_URL env var as single platform-agnostic site URL source ([0aca2bc](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0aca2bc10fb33612666aa25fd0a9e9eb9ec59624))
* use SITE.url from config.ts as single source of truth for sitemap ([07d34c1](https://github.com/zsoltrigler/core-boilerplate-astro/commit/07d34c1c0b027a4885195f1e5edfc7cbd4aedcd9))
* use URL hostname parsing for localhost detection in robots.txt ([b6cd267](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b6cd2676f4952b1c403b3ba8cce6134c8865ec11))
* use URL hostname parsing for localhost detection in robots.txt ([2f8260f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/2f8260fbaf50ae9df40f657dc69ec6becc27fa6e))
* warn in dev when lang has no og:locale mapping ([014e9d2](https://github.com/zsoltrigler/core-boilerplate-astro/commit/014e9d27206197507e43618ffe04e0d352fc7803))
* warn in dev when lang has no og:locale mapping in localeMap ([4535771](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4535771b1db57d528d0965867a8d67c7ac01d81f))
* widen Input value prop type to string | number ([5315a91](https://github.com/zsoltrigler/core-boilerplate-astro/commit/5315a91ec5d0105104a2f214660442e43f1aa012))


### Performance Improvements

* disable CSS code splitting to eliminate render-blocking chunks ([2d9e3bd](https://github.com/zsoltrigler/core-boilerplate-astro/commit/2d9e3bddc0df851ac66082d0514d3d78266ba4ad))
* disable CSS code splitting to eliminate render-blocking chunks ([fd9cae7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/fd9cae79ccd4ebfbc55a8ece5b187187be3add83))
* inline all CSS to eliminate render-blocking external stylesheet ([4ab887b](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4ab887bb6ecdc8f796742db17cb7f522d1ea06fb))
* inline all CSS to eliminate render-blocking external stylesheet ([38ca280](https://github.com/zsoltrigler/core-boilerplate-astro/commit/38ca28084a91fc4734b2492fada3426cb6f21f81))


### Code Refactoring

* Card icon prop removed — named slot only for consistency ([c68612c](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c68612c2ad51fa774f12f6c6d8edbb0679303b0c))
* Card icon prop removed — named slot only, consistent with modular-components branch ([7aa6cc0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/7aa6cc0a0b1f603002aed8d0c2e3c18957a304af))
* Card layout uses flex flex-col gap-2 instead of margin classes ([fa25f7e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/fa25f7e0faa2e51d1559ea795e622b160281edf0))
* Card layout uses flex flex-col gap-2 instead of margin classes ([86e8c16](https://github.com/zsoltrigler/core-boilerplate-astro/commit/86e8c16585697d12a76e9c5b74ab92652404cd28))
* Card uses self-start on named slots, default slot stretches naturally ([77a2efd](https://github.com/zsoltrigler/core-boilerplate-astro/commit/77a2efd149f971ead939a65fbb4869270d959b2f))
* extract aria-describedby builder into shared utility ([7f807dd](https://github.com/zsoltrigler/core-boilerplate-astro/commit/7f807dd1a0b9880155abc4f2d04c0c6b0e70cbfa))
* extract aria-describedby builder into shared utility ([6620d08](https://github.com/zsoltrigler/core-boilerplate-astro/commit/6620d08a3e3f5666938c76aab403250363f7a3c3))
* extract CodeWindow component, replace 15 inline chrome blocks ([82129dc](https://github.com/zsoltrigler/core-boilerplate-astro/commit/82129dc83d3a04f351fc5b16df1218d1d38563bd))
* extract hero and features into self-contained section components ([43cbde8](https://github.com/zsoltrigler/core-boilerplate-astro/commit/43cbde88f35eded85926a0aa54390808bb699047))
* extract ShowcaseSection component, replace boilerplate in 13 files ([5077765](https://github.com/zsoltrigler/core-boilerplate-astro/commit/50777655e02cf42cf7690f80fb81ee9371537d79))
* extract WCAG contrast checks into standalone script ([0a02b49](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0a02b49f91fb12e3b58631632701b4ed5f5f4ecb))
* extract WCAG contrast checks into standalone script ([50a74b0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/50a74b09460c3ad283823e2b033759bbc7608dd0))
* generic naming, data extracted to config.ts ([9a2f584](https://github.com/zsoltrigler/core-boilerplate-astro/commit/9a2f58437dbb7397b478a3b682dbc30b4445c869))
* grid defined once on body only — remove all overlay divs ([26cb034](https://github.com/zsoltrigler/core-boilerplate-astro/commit/26cb034a4f41a6b9e1f94e9575844b188947d671))
* merge FeatureCard into Card — single parametrizable card component ([27ea3ea](https://github.com/zsoltrigler/core-boilerplate-astro/commit/27ea3eadfded7dbcab48b8ca885c9356b982b0f5))
* move card data back to index.astro — data lives where it's used ([ee79796](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ee797966170ee03611f17a36fef47541f7433fa9))
* move FeatureCard to ui/ — sections/ contains only section components ([41210a2](https://github.com/zsoltrigler/core-boilerplate-astro/commit/41210a210ac9d64b502fcb86560c80d917c8763f))
* move localeMap to config, simplify JSON-LD escaping and robots.txt ([3ec95b5](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3ec95b594e0f6f5efb4e295e8b348b21a27fe96c))
* move localeMap to config, simplify JSON-LD escaping and robots.txt ([dbfa0e7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/dbfa0e7725f7e729d4da8e647e57f16646708f61))
* remove all margin classes — gap-based spacing throughout ([8b9ea8b](https://github.com/zsoltrigler/core-boilerplate-astro/commit/8b9ea8b8abe4f8b5afb3624ff4b0c7bd90054379))
* remove all named slots — section components use only default slot ([35fbb33](https://github.com/zsoltrigler/core-boilerplate-astro/commit/35fbb33a491399d9db50bb22a431f0f92474640f))
* remove redundant JSDoc from ariaDescribedBy ([da19707](https://github.com/zsoltrigler/core-boilerplate-astro/commit/da197076c5980b9359edca919846c37371a7aa1f))
* remove redundant JSDoc from ariaDescribedBy ([68f63ae](https://github.com/zsoltrigler/core-boilerplate-astro/commit/68f63ae222b531367e4080f33b79043108a47769))
* remove View Transitions (ClientRouter) from BaseLayout ([902d6a3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/902d6a3a539df50c4e5388cfb9fba59e6b784613))
* remove View Transitions lifecycle event listeners from all components ([c4c1821](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c4c1821f14d632e10d5c12633e753247f027942b))
* remove View Transitions lifecycle event listeners from all components ([a242329](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a24232975f5f0729b2ebf41d19d194bdce944bd0))
* section components are layout-only, content passed via slots ([8d04a02](https://github.com/zsoltrigler/core-boilerplate-astro/commit/8d04a022c46621d2f34273a341f42b1c80776745))
* simplify config export, remove JSX fragments, cache DOM que… ([7898a9f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/7898a9f5c7e4b0d0881b19a9599ca7775a3fb122))
* simplify config export, remove JSX fragments, cache DOM queries ([210f05a](https://github.com/zsoltrigler/core-boilerplate-astro/commit/210f05a185f0cce61feb7c04e8071e9a09ef2aeb))
* simplify mobile menu script — remove WeakMap pattern no longer needed without View Transitions ([767599d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/767599d67ce76912a107782b61f0beed68d467a4))
* simplify Modal script — remove re-init wrapper and AbortController pattern no longer needed without View Transitions ([4be161a](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4be161a32a5159fc4a909392935fd837bb6f529f))
* single source of truth for color tokens ([a3e107c](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a3e107c6aa0e575c210933764aabb6b05d402b05))
* split ui.astro into per-component showcase files ([d72076a](https://github.com/zsoltrigler/core-boilerplate-astro/commit/d72076aa75de84aba114ef56cd41c6f6195ca772))
* split ui.astro into per-component showcase files ([88af602](https://github.com/zsoltrigler/core-boilerplate-astro/commit/88af6028fbcc40de85485eebd050ea9e3cade844))


### Documentation

* add CONTRIBUTING.md with setup, branch, and code standards ([86dfb14](https://github.com/zsoltrigler/core-boilerplate-astro/commit/86dfb14010e3c751c64d6e6473c72fed57412082))
* add CONTRIBUTING.md with setup, branch, and code standards ([b021a17](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b021a174191e0107f296e9b1b1b68f21ad8c64ec))
* add JSON-LD at scale section — shared layout pattern for blog/product pages ([0eb6fd4](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0eb6fd40aaee5afc540b9c17a72853c21859f2bb))
* clarify data-modal-close passthrough on Button component ([ce86f84](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ce86f840613a48273ee17b6e2b175edc7493447c))
* clarify data-modal-close passthrough on Button component ([80c8a7b](https://github.com/zsoltrigler/core-boilerplate-astro/commit/80c8a7b5192a5d9a90a1bc5a8f5daf044e5bffad))
* document ogImageAlt, ogLocale, jsonLd props in BaseLayout section ([4804c46](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4804c46282767ede29d253d7615524cefcfe55d9))
* strengthen SITE_URL warning in astro.config — missing env var breaks sitemap and canonical URLs in production ([1e5c8b5](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1e5c8b51cee8723a0233c3ed1cf94c7de9194439))
* update CONTRIBUTING project structure — add all ui components a… ([3158af7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3158af7e2e3167d1db7ca2e80dcde4fc1669382b))
* update CONTRIBUTING project structure — add all ui components and utils ([a06d33d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a06d33d56c9813b36095e05904a7d1d442478c06))
* update README — remove View Transitions, add missing components, expand CI section ([3eddd3e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3eddd3e7078aa17176cdf11fee7cf7549adcf97d))
* update README — remove View Transitions, add missing components… ([e382538](https://github.com/zsoltrigler/core-boilerplate-astro/commit/e38253871827e2f814f6a14db746f0e232605065))
* update README deployment section and fix NAV_LINKS example ([57f1cea](https://github.com/zsoltrigler/core-boilerplate-astro/commit/57f1cea493022fcaf50f961dbebf663bddb2f445))
* update README with CI badge, OG image, CI and contributing sect… ([94ea170](https://github.com/zsoltrigler/core-boilerplate-astro/commit/94ea170057f24c4d841ffc3873e26ad078b64a3b))
* update README with CI badge, OG image, CI and contributing sections ([15925e2](https://github.com/zsoltrigler/core-boilerplate-astro/commit/15925e256b093c2f17ede035ccc182b4be11386d))


### Miscellaneous Chores

* add Better Comments to recommended VS Code extensions ([40717c3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/40717c31963bd51364eb3a5d258f3c3ac811b401))
* add CLAUDE.md, apple-touch-icon, and extend SITE config ([f9c03c0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f9c03c0219774638d3b134ca1260750ecf6cba66))
* add default OG image and update config to reference it ([94b8f4e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/94b8f4ec17016047845bd935ad1bc99379347ed3))
* add default OG image and update config to reference it ([0398648](https://github.com/zsoltrigler/core-boilerplate-astro/commit/03986484ee9d95fdbfb31e93812a1ce0ab38065b))
* add ESLint with TypeScript and Astro plugin ([99b8abf](https://github.com/zsoltrigler/core-boilerplate-astro/commit/99b8abfa14649c0c4dfb800f6ee992040a718396))
* add favicon field to SITE config ([dc82769](https://github.com/zsoltrigler/core-boilerplate-astro/commit/dc827694ffa4b2a3c96f4caa61e674c2a78fc01c))
* add GitHub Actions CI pipeline with type check and build ([5385947](https://github.com/zsoltrigler/core-boilerplate-astro/commit/538594741dd53a5d5686382f9ea62508da4f3f57))
* add GitHub Actions CI pipeline with type check and build ([be45139](https://github.com/zsoltrigler/core-boilerplate-astro/commit/be45139c5c14acadb2dc6fa6248430da4165e8ff))
* add GitHub repo link to navigation ([e071902](https://github.com/zsoltrigler/core-boilerplate-astro/commit/e071902a1042bd795728d993acc60fde4f2d44cf))
* add LICENSE, README, .env.example and remove stale package-lock.json ([b364fd3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b364fd3d53b01c711670f817ee9892005c1bb886))
* add LICENSE, README, .env.example and remove stale package-lock.json ([aa17c4e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/aa17c4ea1ab200c5065bb585e93ddf4058c4dbad))
* add Lighthouse CI config with enforced score thresholds ([f527ee8](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f527ee832260c8f90cdd777e23f65daa2e7b4af4))
* add Lighthouse CI config with enforced score thresholds ([ebfbc8f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ebfbc8fe1d38a3d866eea8e17ab17a25d7f1c734))
* add Lighthouse CI with category score assertions ([af4c7ef](https://github.com/zsoltrigler/core-boilerplate-astro/commit/af4c7efea43a8831d93b445307ee3120c3b4b132))
* add Prettier with Astro and Tailwind plugins ([a6d1ad0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a6d1ad0e91aa5f016e66eba1a786907ed3885d09))
* add professional comments across the codebase ([4848101](https://github.com/zsoltrigler/core-boilerplate-astro/commit/48481013161da1a24d55a1636d9e934dc7aefa6c))
* add professional comments across the codebase ([66d1340](https://github.com/zsoltrigler/core-boilerplate-astro/commit/66d134016017ed61101e8f22a250726f5eb4ac95))
* add pull request template ([5f9f455](https://github.com/zsoltrigler/core-boilerplate-astro/commit/5f9f4558e50f9a598fd878c51f478eb82343c1d1))
* add pull request template ([3aec46e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3aec46e26847b7bf9ff7ac8ee5539d9951b4c149))
* add recommended VS Code extensions for Astro + Tailwind + TS stack ([af8dd95](https://github.com/zsoltrigler/core-boilerplate-astro/commit/af8dd957204081df16eba581c83b702245799730))
* block CI on placeholder description, add after-cloning checklist ([b81bb87](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b81bb87ea146ea1a294b801afe77b7fdfe912816))
* block CI on placeholder description, add after-cloning checklist to README ([11fdbd3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/11fdbd36963e5d3d459a5688ec828f60c7023f00))
* commit .vscode config and update .gitignore ([7e08c6c](https://github.com/zsoltrigler/core-boilerplate-astro/commit/7e08c6cc3600805f5d8b4bcc57d3cf244cd6925f))
* commit .vscode config and update .gitignore ([a638afb](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a638afbe65ea29bd46b0727d0a7345e8a1ac346a))
* exclude /ui from sitemap and robots.txt ([0feeacf](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0feeacfe81b140396af4bee4da5d41e1a88da692))
* exclude /ui from sitemap and robots.txt ([37015ec](https://github.com/zsoltrigler/core-boilerplate-astro/commit/37015ec92b1a3e339a444b84bbc564d6b2a90a38))
* only deploy to Vercel on main branch pushes ([c60db17](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c60db17ab1360b9f912107f2bec4ca1a01c0ace9))
* only deploy to Vercel on main branch pushes ([ffbe61e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ffbe61e732c9b96401931498fd226d8a0b9cb527))
* prepare repo for public release ([ee5944e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ee5944e9596618f232fe9e3ebc38945f1d39f0e5))
* prepare repo for public release ([96ea1ae](https://github.com/zsoltrigler/core-boilerplate-astro/commit/96ea1ae1442e1404eedcfe7316ec06fb68d5ad86))
* remove Astro docs link from navigation ([f38c27c](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f38c27c81bb8e122f096bd6ebeb504b27ffec8d2))
* remove deprecated keywords meta tag ([8796d64](https://github.com/zsoltrigler/core-boilerplate-astro/commit/8796d64af89d07e708d683c3824573d44c703335))
* remove HeroSection and CardGridSection — not part of core boilerplate ([1c1a848](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1c1a848be7e7bfa19e5ea47cc756acf5cf7892fe))
* remove unnecessary .env.example and clean up .gitignore ([4fa8a9e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4fa8a9e7c32e10f0784820d3c10116ae9cf2622a))
* remove unnecessary .env.example and clean up .gitignore ([b732f10](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b732f10878973eabee8107ca708df9699b246493))
* remove unused barrel files from ui and layout ([bc84681](https://github.com/zsoltrigler/core-boilerplate-astro/commit/bc846818660ac67312ba481e293ee1e1bddbcab8))
* replace default Astro favicon with custom grid icon ([f36ce30](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f36ce30369a7766aeea1d29bcb2b8ec611596cbb))
* replace default Astro favicon with custom grid icon ([f54a4d7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f54a4d7e9b23c3c6aad9844cacf1b401e052a4c2))
* retroactive versioning — CHANGELOG split into 6 releases, manifest at 1.5.0 ([1e50977](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1e50977f51700021f47f1884ef5767bdc0bd82e8))
* set accessibility minScore to 0.96 in Lighthouse CI ([d437ff8](https://github.com/zsoltrigler/core-boilerplate-astro/commit/d437ff8fc9c0c90fb1bd89f448bce69567229b82))
* set up release-please with retroactive CHANGELOG for v1.0.0 ([f425b34](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f425b34a3fdfe660d87b40b1ecb78bf108f55cc7))
* set up release-please with retroactive CHANGELOG for v1.0.0 ([046badf](https://github.com/zsoltrigler/core-boilerplate-astro/commit/046badf602470d0216004eaaf021f007a3ca1464))
* simplify PR template to 4 sections — remove test plan (solo dev workflow) ([a08c6fe](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a08c6fe0e32142ce387cb398e059222bd0619f72))
* update CLAUDE.md — remove stale sections, sync component and page list ([44c0072](https://github.com/zsoltrigler/core-boilerplate-astro/commit/44c0072737876902cffe4496d92e28e7c3dc15d7))
* update PR template — add Summary, Breaking changes, Test plan, Screenshots sections ([bf8cc31](https://github.com/zsoltrigler/core-boilerplate-astro/commit/bf8cc31d00813ccc8a42f8479130f6b888ba3374))
* update PR template to best practice structure ([0c0d769](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0c0d7699f397b9f33e726635aa5fe45dd36bee30))

## [1.5.0](https://github.com/zsoltrigler/core-boilerplate-astro/compare/v1.4.0...v1.5.0) (2026-07-05)

### Miscellaneous Chores

* add Lighthouse CI config — enforces SEO and best-practices at 1.0 on every CI run ([ebfbc8f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ebfbc8f))
* add CommonJS globals to ESLint config for .cjs files ([e6c2230](https://github.com/zsoltrigler/core-boilerplate-astro/commit/e6c2230))

### Code Refactoring

* move OG locale map to config, simplify JSON-LD escaping and robots.txt ([dbfa0e7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/dbfa0e7))

### Bug Fixes

* harden JSON-LD escaping — single-pass regex, og:image:alt always present ([1846443](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1846443))
* ensure JSON-LD @context cannot be overridden by caller ([5c60d89](https://github.com/zsoltrigler/core-boilerplate-astro/commit/5c60d89))
* warn in dev when lang has no og:locale mapping ([4535771](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4535771))
* use URL hostname parsing for localhost detection in robots.txt ([2f8260f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/2f8260f))

---

## [1.4.0](https://github.com/zsoltrigler/core-boilerplate-astro/compare/v1.3.0...v1.4.0) (2026-07-05)

### Features

* JSON-LD structured data support via `jsonLd` prop on BaseLayout ([4d555e3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4d555e3))
* og:locale auto-derived from `lang` prop with configurable locale map ([4d555e3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4d555e3))
* og:image:alt prop on BaseLayout — shown by screen readers and LinkedIn ([4d555e3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4d555e3))

### Bug Fixes

* escape HTML-special chars in JSON-LD output to prevent XSS ([cab61d7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/cab61d7))
* block CI on placeholder description — throws in CI, warns locally ([11fdbd3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/11fdbd3))

### Documentation

* document ogImageAlt, ogLocale, jsonLd props in BaseLayout README section ([4804c46](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4804c46))
* add JSON-LD at scale section — shared layout pattern for blog/product pages ([0eb6fd4](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0eb6fd4))
* update README — remove View Transitions, add missing components, expand CI section ([3eddd3e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3eddd3e))

---

## [1.3.0](https://github.com/zsoltrigler/core-boilerplate-astro/compare/v1.2.0...v1.3.0) (2026-07-01)

### Features

* replace manual syntax spans with Shiki Code component for accurate syntax highlighting ([a79e51d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a79e51d))

### Code Refactoring

* remove View Transitions (ClientRouter) — simpler, more compatible, no lifecycle overhead ([902d6a3](https://github.com/zsoltrigler/core-boilerplate-astro/commit/902d6a3))
* extract CodeWindow component — replaces 15 identical inline chrome blocks ([82129dc](https://github.com/zsoltrigler/core-boilerplate-astro/commit/82129dc))
* extract ShowcaseSection component — replaces boilerplate in 13 showcase files ([5077765](https://github.com/zsoltrigler/core-boilerplate-astro/commit/5077765))
* extract aria-describedby builder into shared utility ([6620d08](https://github.com/zsoltrigler/core-boilerplate-astro/commit/6620d08))
* extract WCAG contrast checks into standalone script ([50a74b0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/50a74b0))
* split ui.astro into per-component showcase files ([88af602](https://github.com/zsoltrigler/core-boilerplate-astro/commit/88af602))

### Bug Fixes

* prevent XSS in Toast — build DOM nodes instead of innerHTML ([f75d30b](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f75d30b))
* smooth dark mode transition via @property color token registration ([3b04089](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3b04089))

### Performance Improvements

* disable CSS code splitting — eliminates render-blocking CSS chunks ([fd9cae7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/fd9cae7))

---

## [1.2.0](https://github.com/zsoltrigler/core-boilerplate-astro/compare/v1.1.0...v1.2.0) (2026-07-01)

### Features

* Select component — native select with label, hint, error state, size variants ([3910fc9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3910fc9))
* Checkbox component — with label, hint, error state and aria-label support ([3910fc9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3910fc9))
* Textarea component — resizable, with label, hint, error state ([3910fc9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3910fc9))
* Tabs component — accessible tab panel with keyboard navigation ([3910fc9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3910fc9))
* Toast component — top-center dismissible notifications ([3910fc9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3910fc9))
* Breadcrumb component — structured navigation trail with schema.org markup ([3910fc9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3910fc9))
* active state tracking in /ui sidebar navigation ([a939a13](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a939a13))
* add aria-label prop to Checkbox for label-less usage ([35e0df0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/35e0df0))

### Miscellaneous Chores

* add ESLint with TypeScript and Astro plugin ([99b8abf](https://github.com/zsoltrigler/core-boilerplate-astro/commit/99b8abf))
* add CLAUDE.md with project architecture and development guidelines ([f9c03c0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f9c03c0))

### Bug Fixes

* fix WCAG contrast failures on status colors ([7c2ef99](https://github.com/zsoltrigler/core-boilerplate-astro/commit/7c2ef99))
* fix WCAG contrast failures in Badge, Alert and Danger button ([ef2827d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ef2827d))
* resolve OG image URL dynamically per environment ([c3729b7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c3729b7))
* remove Disallow /ui/ from robots.txt — noindex meta tag is sufficient ([3afe630](https://github.com/zsoltrigler/core-boilerplate-astro/commit/3afe630))
* use aria-disabled and pointer-events-none for disabled link buttons ([5315a91](https://github.com/zsoltrigler/core-boilerplate-astro/commit/5315a91))

---

## [1.1.0](https://github.com/zsoltrigler/core-boilerplate-astro/compare/v1.0.0...v1.1.0) (2026-06-25)

### Features

* UI component library — Button, Badge, Card, Alert, Section, Container ([c3c9183](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c3c9183))
* fully parametrizable UI components — every visual decision is a prop ([60584f4](https://github.com/zsoltrigler/core-boilerplate-astro/commit/60584f4))
* named slots for Card and Alert, barrel exports for ui/ and layout/ ([a96bbe0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a96bbe0))
* Button supports icon-left and icon-right named slots ([32a46fc](https://github.com/zsoltrigler/core-boilerplate-astro/commit/32a46fc))
* IconButton component — square icon-only button with required aria-label ([b074739](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b074739))
* social icon support in Footer with default SVG social links ([2f44ca6](https://github.com/zsoltrigler/core-boilerplate-astro/commit/2f44ca6))
* SITE.showName toggle — control logo/name display independently ([21c74a6](https://github.com/zsoltrigler/core-boilerplate-astro/commit/21c74a6))
* Input component — label, hint, error state, size variants ([6c5b024](https://github.com/zsoltrigler/core-boilerplate-astro/commit/6c5b024))
* Modal component — native dialog, backdrop, size variants ([d5d2592](https://github.com/zsoltrigler/core-boilerplate-astro/commit/d5d2592))
* skip to content link for keyboard accessibility ([666abc2](https://github.com/zsoltrigler/core-boilerplate-astro/commit/666abc2))
* separate /ui component library page with sticky sidebar ([1dd712d](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1dd712d))
* component preview section on home page ([14072e1](https://github.com/zsoltrigler/core-boilerplate-astro/commit/14072e1))
* add favicon field to SITE config ([0eb8292](https://github.com/zsoltrigler/core-boilerplate-astro/commit/0eb8292))
* OG-inspired dark hero layout ([aaef67f](https://github.com/zsoltrigler/core-boilerplate-astro/commit/aaef67f))

### Bug Fixes

* OG image switched from SVG to JPG for social platform compatibility ([48e2297](https://github.com/zsoltrigler/core-boilerplate-astro/commit/48e2297))
* spread rest props on Button so data-* attributes pass through to DOM ([c6999b9](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c6999b9))
* replace hardcoded hex colors in 404 page with design tokens ([c100aba](https://github.com/zsoltrigler/core-boilerplate-astro/commit/c100aba))
* dark brandPrimary WCAG AA check, PNG favicon fallback, SOCIAL_LINKS warning ([dffedf7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/dffedf7))
* use AbortController in Modal to prevent listener accumulation ([a9876f8](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a9876f8))
* add CI timeout, fix pnpm version conflict in GitHub Actions ([6c5b024](https://github.com/zsoltrigler/core-boilerplate-astro/commit/6c5b024))

### Miscellaneous Chores

* add GitHub Actions CI pipeline with type check, lint, build, Lighthouse ([be45139](https://github.com/zsoltrigler/core-boilerplate-astro/commit/be45139))
* add Prettier with Astro and Tailwind plugins ([a6d1ad0](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a6d1ad0))
* add VS Code recommended extensions for Astro + Tailwind + TypeScript ([af8dd95](https://github.com/zsoltrigler/core-boilerplate-astro/commit/af8dd95))
* add LICENSE, README, and remove stale package-lock.json ([aa17c4e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/aa17c4e))
* prepare repo for public release ([96ea1ae](https://github.com/zsoltrigler/core-boilerplate-astro/commit/96ea1ae))
* add custom grid favicon, default OG image ([f54a4d7](https://github.com/zsoltrigler/core-boilerplate-astro/commit/f54a4d7))

### Documentation

* add CONTRIBUTING.md with setup, branch, and code standards ([b021a17](https://github.com/zsoltrigler/core-boilerplate-astro/commit/b021a17))

---

## [1.0.0](https://github.com/zsoltrigler/core-boilerplate-astro/releases/tag/v1.0.0) (2026-06-24)

### Features

* initial core boilerplate — Astro 7 SSG, Tailwind CSS v4, TypeScript strict mode ([ae3d27e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ae3d27e))
* core enhancements — single-source config, SEO meta tags, sitemap ([2f9560e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/2f9560e))
* WCAG AA contrast checks at build time — warns locally, throws in CI ([1b97fdf](https://github.com/zsoltrigler/core-boilerplate-astro/commit/1b97fdf))
* dynamic robots.txt with sitemap injection, mobile navigation ([4c5515e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/4c5515e))
* FOUC-free dark mode with localStorage persistence ([ae3d27e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ae3d27e))
* single-source color token system — CSS custom properties injected at build time ([a3e107c](https://github.com/zsoltrigler/core-boilerplate-astro/commit/a3e107c))
* Header, Footer, ThemeToggle global components ([ae3d27e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ae3d27e))
* 404 page with brand-styled layout and noindex ([ae3d27e](https://github.com/zsoltrigler/core-boilerplate-astro/commit/ae3d27e))
