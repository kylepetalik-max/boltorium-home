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
    d: 'Sign in or join the waitlist via Enter App — opens the live demo at boltorium.co.',
  },
  {
    n: '02',
    t: 'Ride',
    d: 'GPS tracks your real path on EUC, e-moto, board, or scooter. Safety gate before ignition.',
  },
  {
    n: '03',
    t: 'Earn',
    d: 'Striker verifies the session. PASS credits Boltz (demo credits today). FAIL earns nothing.',
  },
  {
    n: '04',
    t: 'Demo access',
    d: 'Garage, shop, missions, and rank are live in the demo. Mainnet is planned — not claimed yet.',
  },
];

const BENEFITS = [
  { t: 'Built for riders', d: 'Phone-first HUD, safety gate, and vehicle classes that match how you actually ride.' },
  { t: 'Anti-cheat first', d: 'Striker verification before Boltz — no ghost GPS farming.' },
  { t: 'Solana-ready', d: 'Demo pubkey + trace hash today. Honest about mainnet timing.' },
  { t: 'Crew energy', d: 'Rank, missions, airdrops, and a marketplace for official + P2P gear.' },
];

const LIVE_NOW = [
  'GPS ride tracking in the live app',
  'Striker verify gate (PASS / REVIEW / FAIL)',
  'Boltz demo credits (not mainnet mint)',
  'Garage, shop, and missions in the live app',
  'Marketing portal on www.boltorium.co',
];

const PLANNED = [
  'Solana mainnet minting & wallet connect beyond demo pubkey',
  'Native store wraps (iOS / Android)',
  'Scaled rewards once tokenomics + Striker are locked',
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
          <p className="mt-5 max-w-xl text-base text-bone/75 sm:text-lg">
            GPS-verified ride-to-earn for electric riders. Join → Ride → Earn → Demo.
            Charge up Boltz, build your garage — demo on Solana until mainnet.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={APP_URL} className="btn-bolt !w-auto !px-8 !rounded-full">
              Enter App
            </a>
            <Link
              to="/how-it-works"
              className="inline-flex h-14 items-center justify-center rounded-full border border-cyan/50 px-8 font-display text-lg font-extrabold uppercase tracking-wider text-cyan transition hover:bg-cyan/10"
            >
              Learn
            </Link>
            <Link
              to="/roadmap"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-8 font-display text-lg font-extrabold uppercase tracking-wider text-bone/80 transition hover:bg-white/5"
            >
              Roadmap
            </Link>
          </div>
          <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-bone/40">
            LIVE DEMO · DEVNET / DEMO CREDITS · MAINNET ON THE ROADMAP
          </p>
        </div>
      </section>

      {/* WHAT */}
      <section id="what" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="hud-label text-cyan">What is Boltorium?</p>
        <h2 className="headline mt-2 text-3xl text-bone sm:text-4xl">
          Ride real. Earn verified. <span className="text-bolt">No gold vault fluff.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-bone/70">
          Boltorium is a ride-to-earn app for EUCs, e-motos, boards, and scooters. You ride,
          Striker verifies the session, and eligible rides earn Boltz. Garage, shop, rank, and
          missions wrap the loop — denser chrome, graffiti energy, neon green charge.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { k: 'GPS + IMU', v: 'Real coords on the HUD' },
            { k: 'Striker', v: 'PASS / REVIEW / FAIL gate' },
            { k: 'Boltz', v: 'Neon green demo credits' },
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
              <h2 className="headline mt-2 text-3xl sm:text-4xl">Join → Ride → Earn → Demo</h2>
              <p className="mt-2 max-w-xl text-sm text-bone/60">
                Primary CTA: Enter App opens the live demo at boltorium.co. Secondary: Learn / Roadmap.
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
              Enter App — live demo
            </a>
          </div>
        </div>
      </section>

      {/* TRUST / PROOF */}
      <section id="trust" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="hud-label text-bolt">Trust / Proof</p>
        <h2 className="headline mt-2 text-3xl sm:text-4xl">What&apos;s LIVE vs PLANNED</h2>
        <p className="mt-3 max-w-2xl text-bone/70">
          Qualitative proof only. No invented user counts, TVL, or “mainnet live” claims.
          The product is a <span className="text-bolt">labeled demo</span> until mainnet.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-bolt/40 bg-bolt/5 p-6">
            <p className="hud-label text-bolt">LIVE today</p>
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

      {/* SOLANA HONESTY */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="rounded-3xl border border-solana/40 bg-gradient-to-br from-solana/15 via-void to-cyan/10 p-6 sm:p-8">
          <p className="hud-label text-solana">Solana / Boltz honesty</p>
          <h2 className="headline mt-2 text-2xl sm:text-3xl">Demo &amp; devnet until mainnet.</h2>
          <p className="mt-3 max-w-2xl text-bone/70">
            This preview uses a demo Solana pubkey and trace hashes. Boltz here are demo credits —
            not mainnet minting. We will not claim fake rider counts. Mainnet launch is on the
            roadmap; watch that page for status.
          </p>
          <Link to="/roadmap" className="mt-5 inline-flex font-display text-sm font-bold uppercase tracking-wider text-solana hover:text-bolt">
            Mainnet roadmap →
          </Link>
        </div>
      </section>

      {/* MAINNET CTA */}
      <section id="mainnet" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-bolt/30 bg-void p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-bolt/20 blur-3xl" />
          <p className="hud-label text-bolt">Ready to try the demo</p>
          <h2 className="headline mt-2 text-3xl">Enter App → live at boltorium.co</h2>
          <p className="mt-3 max-w-xl text-bone/65">
            Join the waitlist loop, explore the garage, and stress-test rides on demo rails.
            We ship mainnet when Striker + tokenomics are locked.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={APP_URL} className="btn-bolt !w-auto !px-8 !rounded-full">
              Enter App
            </a>
            <Link to="/roadmap" className="inline-flex h-14 items-center rounded-full border border-white/20 px-6 font-display font-bold uppercase tracking-wider text-bone/80">
              View roadmap
            </Link>
            <Link to="/blog" className="inline-flex h-14 items-center rounded-full border border-cyan/40 px-6 font-display font-bold uppercase tracking-wider text-cyan">
              Blog
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
            Follow on X for updates. Discord invite is not public yet — request access by email.
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
