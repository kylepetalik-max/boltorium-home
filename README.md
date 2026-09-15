# Boltorium Home (marketing)

**Live (marketing):** https://www.boltorium.co  
**Pages project URL:** https://kylepetalik-max.github.io/boltorium-home/ — may **301 to www.boltorium.co** once the Pages CNAME is set (expected)  
**Enter App (live Emergent app):** https://boltorium.co  

Static marketing front for Boltorium — homepage, How it works, Ecosystem, Roadmap, Blog, Press.  
**Not** the working app source. Every **Enter App** CTA goes to the live Emergent app on the apex (same tab).

## What this is

- Vite + React + **BrowserRouter** + Tailwind marketing shell
- No Capacitor, no in-app Ride/Garage tabs, no Striker package
- GitHub Pages with **base `/`** for custom domain `www.boltorium.co`
- SPA fallback: build copies `dist/index.html` → `dist/404.html` so clean paths (`/how-it-works`, `/blog/...`) work on Pages

## Routing / SEO note

We switched from **HashRouter** (`#/how-it-works`) to **BrowserRouter** (`/how-it-works`) so sitemap URLs are crawl-friendly on the www custom domain. GitHub Pages serves `404.html` for unknown paths; that file is a copy of `index.html` after build so the SPA boots and React Router resolves the path.

HashRouter limited perfect crawl of deep links; BrowserRouter + `404.html` SPA fallback is preferred when base is `/` on a custom domain.

SEO assets:

- `public/robots.txt` → Allow `/`, Sitemap `https://www.boltorium.co/sitemap.xml`
- `public/sitemap.xml` → clean www URLs for home, product pages, blog posts, press
- `index.html` → canonical, Open Graph, Twitter cards, JSON-LD Organization/WebSite (no fake AggregateRating)

## Local

Run npm install, then npm run build, then npm run dev.

For a Pages-shaped local build: `npm run build:pages` (sets `VITE_BASE=/`).

## Deploy

1. `npm run build` (or `npm run build:pages`) — Vite base `/`, then `cp dist/index.html dist/404.html`
2. Publish **only** `dist/` contents to the `gh-pages` branch (includes `public/CNAME` → `www.boltorium.co`) — never commit `node_modules`
3. GitHub Pages custom domain is `www.boltorium.co` (Enforce HTTPS when the cert is ready)

Once CNAME is set, `https://kylepetalik-max.github.io/boltorium-home/` may 301 to `https://www.boltorium.co`. That is expected.

## Community

- **X:** https://x.com/boltoriumrtl
- **Discord:** no public invite yet — `mailto:kyleadmin@boltorium.co?subject=Discord%20invite` (do not invent a discord.gg code)

## Press & backlinks

See `/press` — contact `kyleadmin@boltorium.co` plus a human checklist of relevant listing categories. Do not buy backlinks; outreach is a human/com task.

## Worldnic DNS (Kyle -- do this in Worldnic)

We do **not** change Worldnic from this repo. Configure DNS as follows so:

- **Apex `boltorium.co`** → Emergent app (restore Emergent / Cloudflare IPs; remove GitHub `185.199.*` apex A records)
- **`www.boltorium.co`** → this GitHub Pages marketing site

### Apex A records (RESTORE Emergent — remove GitHub Pages IPs from apex)

Replace any GitHub Pages apex A records (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) with these Emergent / Cloudflare IPs:

| Type | Host | Value |
|------|------|-------|
| A | @ (apex) | 172.66.2.113 |
| A | @ (apex) | 162.159.142.117 |

### www → GitHub Pages

| Type | Host | Value |
|------|------|-------|
| CNAME | www | kylepetalik-max.github.io |

If a CNAME is not possible, use GitHub Pages A records on `www` instead:

| Type | Host | Value |
|------|------|-------|
| A | www | 185.199.108.153 |
| A | www | 185.199.109.153 |
| A | www | 185.199.110.153 |
| A | www | 185.199.111.153 |

### After DNS propagates

1. Confirm https://www.boltorium.co loads this marketing site.
2. Confirm https://boltorium.co is the Emergent app.
3. Confirm Enter App opens https://boltorium.co
4. In GitHub repo Settings → Pages, enable Enforce HTTPS when the cert is ready.

## Investor map

- boltorium -- v1 live / investor pointer (do not overwrite)
- boltorium-v2 -- archived Capacitor + marketing preview (leave archived)
- boltorium-home -- this repo (marketing front on www)

## Honest notes

- Demo/devnet language in copy; no fabricated rider stats
- Live app is Emergent on apex `boltorium.co`; this repo is marketing on `www`
- With base `/` and Pages custom domain `www.boltorium.co`, the project URL github.io/boltorium-home/ may 301 to www
