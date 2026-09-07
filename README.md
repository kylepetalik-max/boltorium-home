# Boltorium Home (marketing)

**Pages preview:** https://kylepetalik-max.github.io/boltorium-home/
**Enter App (live):** https://launch-ready-131.emergent.host
**Intended domain:** https://boltorium.co (point DNS at this Pages site when ready)

Static marketing front for Boltorium — homepage, How it works, Ecosystem, Roadmap.
**Not** the working app source. Every **Enter App** CTA goes to the live Emergent deploy above (same tab).

## What this is

- Vite + React + HashRouter marketing shell stripped from boltorium-v2
- No Capacitor, no in-app Ride/Garage tabs, no Striker package
- GitHub Pages project site with base `/boltorium-home/`

## Local

Run npm install, then npm run build, then npm run dev.

## Deploy

Push main, then publish dist/ to the gh-pages branch (same pattern as boltorium-v2).

## Custom domain (Kyle ― Worldnic / DNS)

Do not change DNS yourself until ready. For apex boltorium.co on GitHub Pages:

1. Repo Settings, Pages: set Custom domain to boltorium.co (optional www).
2. At Worldnic, apex A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
3. Optional www CNAME to kylepetalik-max.github.io
4. After DNS propagates, enable Enforce HTTPS.
5. When cutting over apex, switch Vite base to /. Until then use the github.io preview.

## Investor map

- boltorium — v1 live / investor pointer (do not overwrite)
- boltorium-v2 — archived Capacitor + marketing preview (leave archived)
- boltorium-home — this repo (marketing front)

## Honest notes

- Demo/devnet language in copy; no fabricated rider stats
- Live app is the Emergent host, not this repo
