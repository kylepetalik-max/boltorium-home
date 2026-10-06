import { Link } from 'react-router-dom';
import MarketingShell from '../components/marketing/MarketingShell.jsx';
import HeroVideo from '../components/HeroVideo.jsx';
import { asset } from '../lib/asset.js';
import { APP_URL } from '../lib/appUrl.js';
import { DISCORD_LABEL, DISCORD_URL, X_URL } from '../lib/community.js';

const JOURNEY = [
  {
    n: '01',
    t: 'Join',
    d: 'Free Enter App at boltorium.co — no paid membership paywall.',
  },
  {
    n: '02',
    t: 'Ride',
    d: 'GPS tracks your real path on EUC, e-moto, board, or scooter. Safety gate before ignition.',
  },
  {
    n: '03',
    t: 'Earn RTL',
    d: 'Striker verifies the session. PASS credits RTL (Phase 1 may be in-app / demo credits). FAIL earns nothing. Riding does not mint BTR.',
  },
  {
    n: '04',
    t: 'Market Boltz',
    d: 'Boltz (BTR) is the tradeable market coin — Meteora DBC intent for BTR only. Oct 8 announces the dual-token story; soft TGE is planned, not live yet. RTL mainnet via boltorium.co, not via Meteora DBC.',
  },
];

const BENEFITS = [
  { t: 'Built for riders', d: 'Phone-first HUD, safety gate, and vehicle classes that match how you actually ride.' },
  { t: 'Anti-cheat first', d: 'Striker verification before RTL — no ghost GPS farming.' },
  { t: 'Dual-token honest', d: 'Market = Boltz / BTR (gold). Earn = RTL (holographic). Two assets, no auto-convert.' },
  { t: 'Crew energy', d: 'Rank, missions, garage, and shop — free Enter App, no Whop token sales.' },
];

const LIVE_NOW = [
  'GPS ride tracking is part of the app experience',
  'Striker verify gate (PASS / REVIEW / FAIL) is in the product plan',
  'RTL earn rewards (Phase 1 may be in-app / demo credits)',
  'Garage, shop, and missions are part of the app experience',
  'Marketing portal on www.boltorium.co — dual-token story live',
];

const PLANNED = [
  'Planned Meteora DBC soft TGE for Boltz / BTR only — after Mode B unlock / Kyle yes',
  'RTL mainnet via boltorium.co / the app after published earn policy (not via Meteora DBC)',
  'Native store wraps (iOS / Android)',
  'DBC graduation / soft-discovery threshold TBD (Kyle lock)',
];

export default function MarketingHome() {
  return (
    <MarketingShell title="BOLTORIUM — Ride-to-Earn">
      {/* HERO */}
      <section className="relative min-h-[88dvh] overflow-hidden">
        <HeroVideo />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/70 via-void/45 to-void" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(ellipse_at_70%_60%,rgba(139,92,246,0.16),transparent_40%)]" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24">
          <img
            src={asset('brand/boltorium-graffiti-v1.png')}
            alt="BOLTORIUM"
            className="w-[min(92vw,520px)] object-contain drop-shadow-[0_0_40px_rgba(56,189,248,0.35)]"
          />
          <p className="mt-5 max-w-2xl text-base text-bone/75 sm:text-lg">
            Ride on Boltorium → earn <span className="text-cyan font-semibold">RTL</span> in the app →
            the market token is <span className="text-bolt font-semibold">Boltz (BTR)</span> on Solana
            via Meteora DBC. RTL mainnet ships via boltorium.co — not via Meteora DBC.
          </p>
          <p className="mt-2 max-w-xl text-sm text-bone/55">
            Free Enter App. Oct 8: dual-token + Meteora DBC intent (BTR) — planned soft TGE, not a live sale. No fake buy button.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={APP_URL} className="btn-bolt !w-auto !px-8 !rounded-full">
              Enter App
            </a>
            <Link
              to="/tokens"
              className="inline-flex h-14 items-center justify-center rounded-full border border-bolt/50 px-8 font-display text-lg font-extrabold uppercase tracking-wider text-bolt transition hover:bg-bolt/10"
            >
              Tokens
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex h-14 items-center justify-center rounded-full border border-cyan/50 px-8 font-display text-lg font-extrabold uppercase tracking-wider text-cyan transition hover:bg-cyan/10"
            >
              Learn
            </Link>
          </div>
          <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-bone/40">
            FREE ENTER APP · EARN RTL (APP) · MARKET BTR (METEORA DBC) · OCT 8 INTENT
          </p>
        </div>
      </section>

      {/* DUAL TOKEN STRIP */}
      <section id="tokens" className="border-y border-white/5 bg-surface/40 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="hud-label text-bolt">Dual-token protocol</p>
              <h2 className="headline mt-2 text-3xl sm:text-4xl">
                Market <span className="text-bolt">Boltz</span> · Earn <span className="text-cyan">RTL</span>
              </h2>
            </div>
            <Link to="/tokens" className="font-display text-sm font-bold uppercase tracking-wider text-bolt hover:text-cyan">
              Full token story →
            </Link>
          </div>
          <img
            src={asset('banners/banner-dual-hero-1500x500.png')}
            alt="Boltz market · RTL earn"
            className="mt-6 w-full rounded-2xl border border-white/10 object-cover"
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-bolt/40 bg-bolt/5 p-5">
              <p className="hud-label text-bolt">MARKET</p>
              <p className="headline mt-2 text-xl text-bolt">Boltz / BTR</p>
              <p className="mt-2 text-sm text-bone/65">
                Tradeable gold market coin. Planned soft TGE via Meteora DBC (BTR only). Oct 8 announces dual-token + DBC intent.
                No live buy, mint address, or price here yet.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan/40 bg-cyan/5 p-5">
              <p className="hud-label text-cyan">EARN</p>
              <p className="headline mt-2 text-xl text-cyan">RTL / RTL</p>
              <p className="mt-2 text-sm text-bone/65">
                “Ride the Lightning.” Verified rides credit RTL. Riding does not mint BTR. Two assets,
                no auto-convert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT */}
      <section id="what" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="hud-label text-cyan">What is Boltorium?</p>
        <h2 className="headline mt-2 text-3xl text-bone sm:text-4xl">
          Ride real. Earn <span className="text-cyan">RTL</span>. Market is <span className="text-bolt">Boltz</span>.
        </h2>
        <p className="mt-4 max-w-2xl text-bone/70">
          Boltorium is a ride-to-earn app for EUCs, e-motos, boards, and scooters. You ride, Striker
          verifies the session, and eligible rides earn RTL through the app. Boltz (BTR) is the
          separate market token launching via Meteora DBC — BTR only; RTL is not on the Meteora sale curve.
          RTL mainnet via boltorium.co. Free Enter App — no Whop, no paid membership wall.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { k: 'GPS + IMU', v: 'Real coords on the HUD' },
            { k: 'Striker', v: 'PASS / REVIEW / FAIL gate' },
            { k: 'RTL', v: 'Earn rewards for verified rides' },
          ].map((c) => (
            <div key={c.k} className="cv-card p-4">
              <p className="headline text-bolt">{c.k}</p>
              <p className="mt-1 text-sm text-bone/65">{c.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section id="how" className="border-y border-white/5 bg-surface/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="hud-label text-solana">Your journey</p>
              <h2 className="headline mt-2 text-3xl sm:text-4xl">Join → Ride → Earn RTL</h2>
              <p className="mt-2 max-w-xl text-sm text-bone/60">
                Free Enter App at boltorium.co. Secondary: Tokens / Learn / Roadmap.
              </p>
            </div>
            <Link to="/how-it-works" className="font-display text-sm font-bold uppercase tracking-wider text-cyan hover:text-bolt">
              Get started path →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {JOURNEY.map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/10 bg-void/70 p-5">
                <p className="font-mono text-xs text-cyan">{s.n}</p>
                <p className="headline mt-2 text-xl text-bolt">{s.t}</p>
                <p className="mt-2 text-sm text-bone/65">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href={APP_URL} className="btn-bolt !w-auto !px-8 !rounded-full">
              Enter App
            </a>
          </div>
        </div>
      </section>

      {/* TRUST / PROOF */}
      <section id="trust" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="hud-label text-bolt">Trust / Proof</p>
        <h2 className="headline mt-2 text-3xl sm:text-4xl">What&apos;s LIVE vs PLANNED</h2>
        <p className="mt-3 max-w-2xl text-bone/70">
          Qualitative proof only. No invented user counts, TVL, mint addresses, or buy buttons.
          Oct 8 announces the dual-token story + <span className="text-bolt">BTR</span> Meteora DBC intent — soft TGE planned, not live. RTL stays on boltorium.co.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-bolt/40 bg-bolt/5 p-6">
            <p className="hud-label text-bolt">PRODUCT SNAPSHOT</p>
            <ul className="mt-4 space-y-2.5">
              {LIVE_NOW.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-bone/80">
                  <span className="text-bolt">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-void/70 p-6">
            <p className="hud-label text-solana">PLANNED</p>
            <ul className="mt-4 space-y-2.5">
              {PLANNED.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-bone/65">
                  <span className="text-solana">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/roadmap" className="mt-5 inline-flex font-display text-sm font-bold uppercase tracking-wider text-solana hover:text-bolt">
              Full roadmap →
            </Link>
          </div>
        </div>
      </section>

      {/* RIDERS */}
      <section id="riders" className="border-y border-white/5 bg-surface/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="hud-label text-bolt">Benefits for riders</p>
          <h2 className="headline mt-2 text-3xl sm:text-4xl">Why join the crew</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b.t} className="holo-card rounded-2xl p-5">
                <p className="headline text-lg text-bone">{b.t}</p>
                <p className="mt-2 text-sm text-bone/65">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METEORA DBC TEASER */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-solana/40 bg-gradient-to-br from-solana/15 via-void to-cyan/10">
          <img
            src={asset('banners/banner-meteora-dbc-1500x500.png')}
            alt="Meteora DBC intent teaser"
            className="w-full border-b border-white/10 object-cover"
          />
          <div className="p-6 sm:p-8">
            <p className="hud-label text-solana">Meteora DBC · Oct 8 intent</p>
            <h2 className="headline mt-2 text-2xl sm:text-3xl">Dual-token + Meteora DBC intent — not a live sale.</h2>
            <p className="mt-3 max-w-2xl text-bone/70">
              Oct 8: announce dual-token + Meteora DBC intent for Boltz / BTR (Studio / secondary
              later). Soft TGE is planned — not launching Oct 8. Meteora DBC is for BTR only — RTL is not on the Meteora sale curve. RTL mainnet ships
              via boltorium.co / the app. No buy button, mint address, or price here until rails are live.
              Tokens never sold via Stripe or Whop. Watch for intent alerts — free Enter App meanwhile.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/tokens" className="inline-flex font-display text-sm font-bold uppercase tracking-wider text-solana hover:text-bolt">
                Dual-token explainer →
              </Link>
              <Link to="/roadmap" className="inline-flex font-display text-sm font-bold uppercase tracking-wider text-cyan hover:text-bolt">
                Roadmap →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAINNET CTA */}
      <section id="mainnet" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-bolt/30 bg-void p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-bolt/20 blur-3xl" />
          <p className="hud-label text-bolt">Ready to ride</p>
          <h2 className="headline mt-2 text-3xl">Enter App — free</h2>
          <p className="mt-3 max-w-xl text-bone/65">
            Free Enter App at boltorium.co. Ride, verify, earn RTL. No paid membership required for the
            day-1 loop.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={APP_URL} className="btn-bolt !w-auto !px-8 !rounded-full">
              Enter App
            </a>
            <Link to="/tokens" className="inline-flex h-14 items-center rounded-full border border-bolt/40 px-6 font-display font-bold uppercase tracking-wider text-bolt">
              Tokens
            </Link>
            <Link to="/roadmap" className="inline-flex h-14 items-center rounded-full border border-white/20 px-6 font-display font-bold uppercase tracking-wider text-bone/80">
              Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="border-y border-white/5 bg-surface/40 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="hud-label text-cyan">Community</p>
          <h2 className="headline mt-2 text-3xl">Ride with the crew</h2>
          <p className="mx-auto mt-3 max-w-lg text-bone/65">
            Follow on X for Oct 8 dual-token + DBC intent alerts. Discord invite is not public yet — request access by email.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={X_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-bone hover:border-cyan/40 hover:text-cyan"
            >
              X / @boltoriumrtl
            </a>
            <a
              href={DISCORD_URL}
              className="rounded-full border border-cyan/30 bg-cyan/5 px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-cyan/80"
            >
              {DISCORD_LABEL}
            </a>
            <a href={APP_URL} className="rounded-full bg-bolt px-6 py-3 font-display text-sm font-extrabold uppercase tracking-wider text-void shadow-bolt">
              Enter App
            </a>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
