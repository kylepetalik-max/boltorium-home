# Boltorium Home (marketing)

**Live (after DNS cutover):** https://boltorium.co  
**Pages (until DNS):** https://kylepetalik-max.github.io/boltorium-home/  
**Enter App (live app):** https://launch-ready-131.emergent.host  

Static marketing front for Boltorium — homepage, How it works, Ecosystem, Roadmap.  
**Not** the working app source. Every **Enter App** CTA goes to the live Emergent deploy above (same tab).

## What this is

- Vite + React + HashRouter marketing shell stripped from boltorium-v2
- No Capacitor, no in-app Ride/Garage tabs, no Striker package
- GitHub Pages with **base `/`** for apex custom domain `boltorium.co`

## Local

Run npm install, then npm run build, then npm run dev.

## Deploy

Push main, then publish dist/ to the gh-pages branch (same pattern as before).

## Worldnic DNS cutover (Kyle -- do this in Worldnic)

GitHub Pages is configured for custom domain boltorium.co.
Do not change DNS until you are ready to cut over. After DNS changes, boltorium.co shows this marketing site; the app stays at https://launch-ready-131.emergent.host via Enter App.

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

1. Confirm https://boltorium.co loads this marketing site.
2. Confirm Enter App still opens https://launch-ready-131.emergent.host
3. In GitHub repo Settings Pages, enable Enforce HTTPS if not already on.
4. Keep the old Emergent / Cloudflare apex A record IPs somewhere if you want a quick DNS rollback.

### Rollback note

If you need to point the apex back to Emergent, restore the previous Worldnic A records (save them before changing). This repo / Pages config does not need to change for a DNS-only rollback of the apex.

## Investor map

- boltorium -- v1 live / investor pointer (do not overwrite)
- boltorium-v2 -- archived Capacitor + marketing preview (leave archived)
- boltorium-home -- this repo (marketing front)

## Honest notes

- Demo/devnet language in copy; no fabricated rider stats
- Live app is the Emergent host, not this repo
- With base /, the project URL github.io/boltorium-home/ may break for assets; prefer the custom domain after cutover
