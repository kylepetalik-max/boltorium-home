# Boltorium Home (marketing)

**Portal LIVE:** https://kylepetalik-max.github.io/boltorium-home/  
**Enter App (live app):** https://launch-ready-131.emergent.host  
**Apex (not yet cut over):** https://boltorium.co — still Emergent DNS; Worldnic A-record cutover when Kyle is ready

Static marketing front for Boltorium — homepage, How it works, Ecosystem, Roadmap.  
**Not** the working app source. Every **Enter App** CTA goes to the live Emergent deploy above (same tab).

## What this is

- Vite + React + HashRouter marketing shell stripped from boltorium-v2
- No Capacitor, no in-app Ride/Garage tabs, no Striker package
- GitHub Pages project site with **base `/boltorium-home/`** (custom domain cleared until DNS cutover)

## Local

Run npm install, then npm run build, then npm run dev.

For a Pages-shaped local build: `npm run build:pages` (sets `VITE_BASE=/boltorium-home/`).

## Deploy

1. `npm run build:pages`
2. Publish `dist/` to the `gh-pages` branch (no `CNAME` file — custom domain stays unset until Worldnic cutover)
3. Confirm https://kylepetalik-max.github.io/boltorium-home/ returns 200

## Worldnic DNS cutover (Kyle -- do this in Worldnic when ready)

Do **not** change DNS until you are ready to cut over. Apex `boltorium.co` currently still points at Emergent. After DNS changes, boltorium.co will show this marketing site; the app stays at https://launch-ready-131.emergent.host via Enter App.

### Apex A records (replace current Emergent / Cloudflare IPs)

Delete or replace the existing apex A records for boltorium.co with these GitHub Pages IPs:

| Type | Host | Value |
|------|------|-------|
| A | @ (apex) | 185.199.108.153 |
| A | @ (apex) | 185.199.109.153 |
| A | @ (apex) | 185.199.110.153 |
| A | @ (apex) | 185.199.111.153 |

### www

| Type | Host | Value |
|------|------|-------|
| CNAME | www | kylepetalik-max.github.io |

### After DNS propagates

1. Switch Vite base back to `/` (`build:pages` / `VITE_BASE=/`) and rebuild.
2. Re-add `public/CNAME` with `boltorium.co` and redeploy to `gh-pages`.
3. Set the GitHub Pages custom domain to `boltorium.co` (and Enforce HTTPS).
4. Confirm https://boltorium.co loads this marketing site.
5. Confirm Enter App still opens https://launch-ready-131.emergent.host
6. Keep the old Emergent / Cloudflare apex A record IPs somewhere if you want a quick DNS rollback.

### Rollback note

If you need to point the apex back to Emergent, restore the previous Worldnic A records (save them before changing). This repo / Pages config does not need to change for a DNS-only rollback of the apex.

## Investor map

- boltorium -- v1 live / investor pointer (do not overwrite)
- boltorium-v2 -- archived Capacitor + marketing preview (leave archived)
- boltorium-home -- this repo (marketing front)

## Honest notes

- Demo/devnet language in copy; no fabricated rider stats
- Live app is the Emergent host, not this repo
- Until Worldnic cutover, use the github.io project URL above; apex boltorium.co is still Emergent
