# Production deployment

The site is static, including build-time rendered homepage HTML. No PHP service, CRM credentials, or Node application server is required in production. The canonical domain is https://lidorfx.com/.

## Build and release

Use Node.js 22.12 or newer (Node 22 LTS recommended), then run:

```sh
npm ci
npm run check:production
```

Publish only `dist/`, including `_headers`, `_redirects`, `404.html`, and `legal/`. Keep existing uncommitted source changes until reviewed; this audit did not create a commit or deploy anything.

`check:production` runs ESLint, the client build, homepage prerendering, and checks built local references, section anchors, canonical URL, structured data, robots/sitemap, 404 metadata and the WhatsApp number. It does not replace browser or live-host checks.

## Suggested hosting: Cloudflare Pages

- Repository root directory: `app`.
- Build command: `npm run check:production` (dependencies must include development dependencies for the build).
- Build output directory: `dist` (relative to `app`).
- Configure the custom domain `lidorfx.com` in Pages, then make the DNS changes it requests.
- Add `www.lidorfx.com` as a custom domain too if it should redirect. The included redirect sends www to the canonical apex.
- Confirm certificate issuance and enable HTTPS redirects in the host settings.
- Review preview deployment access/indexing settings. Keep previews out of search results; robots.txt is not access control.

The `_headers` syntax is for Cloudflare Pages (also supported by Netlify), not a universal server configuration. Other hosts need equivalent header rules. The CSP permits the site's local scripts, local styles and inline styles, Google Fonts used by legal pages, YouTube thumbnails, and youtube-nocookie embeds. Retest CSP if adding analytics, forms, widgets, or other external services.

Cloudflare Pages normally redirects `.html` pages to extensionless URLs. If choosing Pages, standardize legal links, sitemap and canonical URLs on the final extensionless addresses when validating the actual host, or configure a host that preserves the existing `.html` routes. Do not assume local preview behavior proves production routing.

## Verify on the live domain

- Valid certificate and HTTP → HTTPS redirect, one canonical hostname.
- Homepage and assets return 200 with correct MIME types; nonexistent pages return a real 404.
- Legal documents and the cancellation anchor work after any hosting redirects.
- Headers, cache rules and CSP are actually applied; no blocked scripts, images or embeds.
- Open WhatsApp and verify the intended recipient without sending a message.
- Manually confirm checkout product names, prices and sale deadline with the business. The displayed sale ends September 29, 2026 at 09:00 Asia/Jerusalem. Client time controls the visible promotion; checkout is authoritative.
- Run mobile Lighthouse/PageSpeed Insights. No measured Lighthouse score or real-user Core Web Vitals result is claimed by this audit.
- Verify domain ownership in Google Search Console, submit `/sitemap.xml`, and inspect the homepage URL. Indexing and rankings are not guaranteed.

## Content and accessibility scope

Business figures were supplied by Lidor and intentionally preserved. No independent verification of those claims or legal approval is claimed. No financial advice or licensing status was inferred. The user explicitly requested no mobile hamburger menu; none was retained.

The audit verified selected keyboard, modal, zoom and responsive flows. It is not a WCAG certification or a full assistive-technology audit. Homepage numeric statistics are now static on initial render rather than counting from zero, so crawlers and reduced-motion users see meaningful numbers immediately.
