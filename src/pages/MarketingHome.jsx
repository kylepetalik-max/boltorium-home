import { Link } from 'react-router-dom';
import MarketingShell from '../components/marketing/MarketingShell.jsx';
import HeroVideo from '../components/HeroVideo.jsx';
import HeroSparks from '../components/HeroSparks.jsx';
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
    d: 'Boltz (BTR) is the tradeable market coin — Jupiter DTF soft TGE (BTR only) target Thu Oct 8, 2026 PT. Teaser only until live. RTL mainnet via boltorium.co, not Jupiter.',
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
  'Jupiter DTF soft TGE for Boltz / BTR only — target Thu Oct 8, 2026 PT Mode B',
  'RTL mainnet via boltorium.co / the app after published earn policy (not Jupiter)',
  'Native store wraps (iOS / Android)',
  'Public trading after ≥250,000 BTR purchased (educational gate)',
];

export default function MarketingHome() {
  return (
    <MarketingShell title="BOLTORIUM — Ride-to-Earn">
      {/* HERO */}
      <section className="relative min-h-[88dvh] overflow-hidden">
        <img
          src={asset('brand/hero-coin-burst.webp')}
          srcSet={`${asset('brand/hero-coin-burst-768.webp')} 768w, ${asset('brand/hero-coin-burst.webp')} 1280w`}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          fetchpriority="high"
          className="hero-art"
        />
        <HeroVideo poster={asset('brand/hero-coin-burst.webp')} />
        <div className="hero-scrim pointer-events-none absolute inset-0" />
        <HeroSparks />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-24">
          <img
            src={asset('brand/boltorium-wordmark-drip.webp')}
            srcSet={`${asset('brand/boltorium-wordmark-drip-480.webp')} 480w, ${asset('brand/boltorium-wordmark-drip.webp')} 960w`}
            sizes="(min-width: 640px) 600px, 92vw"
            width="960"
            height="381"
            alt="BOLTORIUM"
            className="hero-wordmark h-auto w-[min(92vw,600px)] object-contain"
          />
          <p className="mt-5 max-w-2xl text-base text-bone/85 sm:text-lg">
            Ride on Boltorium → earn <span className="text-holo font-semibold">RTL</span> in the app →
            the market token is <span className="text-bolt font-semibold">Boltz (BTR)</span> on Solana
            via Jupiter DTF. RTL mainnet ships via boltorium.co — not Jupiter.
          </p>
          <p className="mt-2 max-w-xl text-sm text-bone/70">
            Free Enter App. BTR soft TGE teaser Thu Oct 8, 2026 PT Mode B (Jupiter DTF) — no fake buy button.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={APP_URL} className="btn-bolt !w-auto !px-8 !rounded-full">
              Enter App
            </a>
            <Link
              to="/tokens"
              className="inline-flex h-14 items-center justify-center rounded-full border border-bolt/60 bg-void/60 px-8 font-display text-lg font-extrabold uppercase tracking-wider text-bolt shadow-[0_0_18px_rgba(242,201,76,0.18)] backdrop-blur-sm transition hover:bg-bolt/10"
            >
              Tokens
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex h-14 items-center justify-center rounded-full border border-champagne/40 bg-void/60 px-8 font-display text-lg font-extrabold uppercase tracking-wider text-champagne backdrop-blur-sm transition hover:bg-champagne/10"
            >
              Learn
            </Link>
          </div>
          <p className="mt-6 font-mono text-[10px] tracking-[0.2em] text-bone/60">
            FREE ENTER APP · EARN RTL (APP) · MARKET BTR (JUPITER DTF) · OCT 8 TEASER
          </p>
        </div>
      </section>

      <div className="drip-divider" aria-hidden="true" />

      {/* DUAL TOKEN STRIP */}
      <section id="tokens" className="border-b border-white/5 bg-surface/40 pb-12 pt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="hud-label bolt-mark text-bolt">Dual-token protocol</p>
              <h2 className="headline graffiti-head mt-2 text-3xl sm:text-4xl">
                <span className="graffiti-ink">
                  Market <span className="text-molten">Boltz</span> · Earn <span className="text-holo">RTL</span>
                </span>
              </h2>
            </div>
            <Link to="/tokens" className="font-display text-sm font-bold uppercase tracking-wider text-bolt hover:text-champagne">
              Full token story →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="gold-card spark-edge rounded-2xl p-4 sm:p-5">
              <div className="token-visual mb-4">
                <img
                  src={asset('brand/boltzcoin-640.webp')}
                  srcSet={`${asset('brand/boltzcoin-640.webp')} 640w, ${asset('brand/boltzcoin.webp')} 1024w`}
                  sizes="(min-width: 1152px) 540px, (min-width: 640px) 46vw, 92vw"
                  width="1024"
                  height="576"
                  loading="lazy"
                  decoding="async"
                  alt="Gold Boltz (BTR) gear coin marked BOLTZCOIN with a lightning bolt, dripping gold over stacks of gold coins"
                />
              </div>
              <p className="hud-label bolt-mark text-bolt">MARKET</p>
              <p className="headline mt-2 text-xl text-molten">Boltz / BTR</p>
              <p className="mt-2 text-sm text-bone/65">
                Tradeable gold market coin. Soft TGE via Jupiter DTF (BTR only) — target Thu Oct 8, 2026 PT.
                No live buy, mint address, or price here yet.
              </p>
            </div>
            <div className="holo-card spark-edge spark-edge--holo rounded-2xl p-4 sm:p-5">
              <div className="token-visual token-visual--holo mb-4">
                <img
                  src={asset('brand/rtl-coin-640.webp')}
                  srcSet={`${asset('brand/rtl-coin-640.webp')} 640w, ${asset('brand/rtl-coin.webp')} 1280w`}
                  sizes="(min-width: 1152px) 540px, (min-width: 640px) 46vw, 92vw"
                  width="1280"
                  height="720"
                  loading="lazy"
                  decoding="async"
                  alt="Holographic RTL coin with a lightning bolt, covered in dripping molten gold and crackling lightning"
                />
              </div>
              <p className="hud-label bolt-mark bolt-mark--holo text-holo">EARN</p>
              <p className="headline mt-2 text-xl text-holo">RTL / RTL</p>
              <p className="mt-2 text-sm text-bone/65">
                “Ride the Lightning.” Verified rides credit RTL. Riding does not mint BTR. Two assets,
                no auto-convert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT */}
      <section id="what" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div>
          <p className="hud-label bolt-mark text-champagne">What is Boltorium?</p>
          <h2 className="headline graffiti-head mt-2 text-3xl text-bone sm:text-4xl">
            <span className="graffiti-ink">
              Ride real. Earn <span className="text-holo">RTL</span>. Market is <span className="text-molten">Boltz</span>.
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-bone/70">
            Boltorium is a ride-to-earn app for EUCs, e-motos, boards, and scooters. You ride, Striker
            verifies the session, and eligible rides earn RTL through the app. Boltz (BTR) is the
            separate market token launching via Jupiter DTF — BTR only; RTL does not launch on Jupiter.
            RTL mainnet via boltorium.co. Free Enter App — no Whop, no paid membership wall.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { k: 'GPS + IMU', v: 'Real coords on the HUD' },
              { k: 'Striker', v: 'PASS / REVIEW / FAIL gate' },
              { k: 'RTL', v: 'Earn rewards for verified rides' },
            ].map((c) => (
              <div key={c.k} className={c.k === 'RTL' ? 'holo-card rounded-2xl p-4' : 'cv-card p-4'}>
                <p className={`headline ${c.k === 'RTL' ? 'text-holo' : 'text-bolt'}`}>{c.k}</p>
                <p className="mt-1 text-sm text-bone/65">{c.v}</p>
              </div>
            ))}
          </div>
        </div>
        <figure className="poster-frame spark-edge mx-auto w-full max-w-[300px] lg:max-w-none">
          <img
            src={asset('brand/boltzcoin-poster-480.webp')}
            srcSet={`${asset('brand/boltzcoin-poster-480.webp')} 480w, ${asset('brand/boltzcoin-poster.webp')} 800w`}
            sizes="(min-width: 1024px) 340px, 300px"
            width="800"
            height="1114"
            loading="lazy"
            decoding="async"
            alt="BOLTORIUM graffiti wordmark with crown and halo above a gold BOLTZCOIN gear coin, lightning and stacks of dripping gold coins"
          />
        </figure>
      </section>

      {/* JOURNEY */}
      <div className="drip-divider" aria-hidden="true" />
      <section id="how" className="border-b border-white/5 bg-surface/40 pb-16 pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="hud-label bolt-mark text-champagne">Your journey</p>
              <h2 className="headline graffiti-head mt-2 text-3xl sm:text-4xl"><span className="graffiti-ink">Join → Ride → Earn RTL</span></h2>
              <p className="mt-2 max-w-xl text-sm text-bone/60">
                Free Enter App at boltorium.co. Secondary: Tokens / Learn / Roadmap.
              </p>
            </div>
            <Link to="/how-it-works" className="font-display text-sm font-bold uppercase tracking-wider text-champagne hover:text-bolt">
              Get started path →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {JOURNEY.map((s) => (
              <div key={s.n} className="gold-card rounded-2xl p-5">
                <p className="font-mono text-xs text-champagne/80">{s.n}</p>
                <p className={`headline mt-2 text-xl ${s.t === 'Earn RTL' ? 'text-holo' : 'text-bolt'}`}>{s.t}</p>
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
        <p className="hud-label bolt-mark text-bolt">Trust / Proof</p>
        <h2 className="headline graffiti-head mt-2 text-3xl sm:text-4xl"><span className="graffiti-ink">What&apos;s LIVE vs PLANNED</span></h2>
        <p className="mt-3 max-w-2xl text-bone/70">
          Qualitative proof only. No invented user counts, TVL, mint addresses, or buy buttons.
          Oct 8 is a <span className="text-bolt">BTR</span> soft TGE teaser until Jupiter DTF rails are live. RTL stays on boltorium.co.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="gold-card rounded-2xl p-6">
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
      <div className="drip-divider" aria-hidden="true" />
      <section id="riders" className="border-b border-white/5 bg-surface/40 pb-16 pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="hud-label bolt-mark text-bolt">Benefits for riders</p>
          <h2 className="headline graffiti-head mt-2 text-3xl sm:text-4xl"><span className="graffiti-ink">Why join the crew</span></h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b.t} className="gold-card rounded-2xl p-5">
                <p className="headline text-lg text-bone">{b.t}</p>
                <p className="mt-2 text-sm text-bone/65">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JUPITER TEASER */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-solana/40 bg-gradient-to-br from-solana/15 via-void to-molten/10">
          <img
            src={asset('banners/banner-jupiter-launch-1500x500.png')}
            alt="Jupiter launch banner: BOLTZ · Boltzcoin / BTR — First access to Boltz, October 8th"
            className="w-full border-b border-white/10 object-cover"
          />
          <div className="p-6 sm:p-8">
            <p className="hud-label text-solana">Jupiter DTF · Oct 8 Mode B</p>
            <h2 className="headline graffiti-head mt-2 text-2xl sm:text-3xl"><span className="graffiti-ink">Soft TGE teaser — not a live sale yet.</span></h2>
            <p className="mt-3 max-w-2xl text-bone/70">
              Boltz (BTR) soft TGE target: Thursday Oct 8, 2026 PT via Jupiter DTF (Studio / secondary
              later). Jupiter DTF is for BTR only — RTL does not launch on Jupiter. RTL mainnet ships
              via boltorium.co / the app. No buy button, mint address, or price here until rails are live.
              Tokens never sold via Stripe or Whop. Watch for launch alerts — free Enter App meanwhile.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/tokens" className="inline-flex font-display text-sm font-bold uppercase tracking-wider text-solana hover:text-bolt">
                Dual-token explainer →
              </Link>
              <Link to="/roadmap" className="inline-flex font-display text-sm font-bold uppercase tracking-wider text-champagne hover:text-bolt">
                Roadmap →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAINNET CTA */}
      <section id="mainnet" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="gold-card spark-edge relative overflow-hidden rounded-3xl p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-bolt/20 blur-3xl" />
          <img
            src={asset('brand/boltorium-badge.webp')}
            alt=""
            aria-hidden="true"
            width="640"
            height="550"
            loading="lazy"
            decoding="async"
            className="brand-glow pointer-events-none absolute right-8 top-1/2 hidden w-48 -translate-y-1/2 md:block lg:right-12 lg:w-56"
          />
          <p className="hud-label bolt-mark text-bolt">Ready to ride</p>
          <h2 className="headline graffiti-head mt-2 text-3xl"><span className="graffiti-ink">Enter App — free</span></h2>
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
      <div className="drip-divider" aria-hidden="true" />
      <section id="community" className="border-b border-white/5 bg-surface/40 pb-16 pt-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="hud-label bolt-mark text-champagne">Community</p>
          <h2 className="headline graffiti-head graffiti-head--center mt-2 text-3xl"><span className="graffiti-ink">Ride with the crew</span></h2>
          <p className="mx-auto mt-3 max-w-lg text-bone/65">
            Follow on X for Oct 8 launch alerts. Discord invite is not public yet — request access by email.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={X_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-bone hover:border-champagne/50 hover:text-champagne"
            >
              X / @boltoriumrtl
            </a>
            <a
              href={DISCORD_URL}
              className="rounded-full border border-champagne/30 bg-champagne/5 px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-champagne/90"
            >
              {DISCORD_LABEL}
            </a>
            <a href={APP_URL} className="btn-molten-sm rounded-full px-6 py-3 font-display text-sm font-extrabold uppercase tracking-wider">
              Enter App
            </a>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
