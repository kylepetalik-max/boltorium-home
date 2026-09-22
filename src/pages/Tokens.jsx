import { Link } from 'react-router-dom';
import MarketingShell from '../components/marketing/MarketingShell.jsx';
import { asset } from '../lib/asset.js';
import { APP_URL } from '../lib/appUrl.js';

const HONESTY = [
  'No live buy button, mint address, or price on this site.',
  'Tokens are never sold via Stripe, Whop, or side brands.',
  'Riding earns RTL — it does not mint Boltz / BTR.',
  'Phase 1 RTL may be in-app / demo credits until on-chain policy ships.',
  'Option B: two assets, no auto-convert between Boltz and RTL.',
];

export default function Tokens() {
  return (
    <MarketingShell title="Tokens — BOLTORIUM dual-token">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <p className="hud-label text-bolt">Dual-token protocol</p>
        <h1 className="headline mt-2 text-4xl sm:text-5xl">
          Market <span className="text-bolt">Boltz</span> · Earn <span className="text-cyan">RTL</span>
        </h1>
        <p className="mt-4 max-w-2xl text-bone/70">
          Ride on Boltorium → earn <strong className="text-cyan">RTL</strong> → the market token is{' '}
          <strong className="text-bolt">Boltz (BTR)</strong> on Solana via{' '}
          <strong className="text-bone">Jupiter DTF</strong>. Soft TGE target{' '}
          <strong className="text-bone">Tue Sep 29, 2026 PT · Mode B</strong> — teaser + interest only
          until sale rails are live.
        </p>

        <img
          src={asset('banners/banner-dual-hero-1500x500.png')}
          alt="Boltz market · RTL earn"
          className="mt-8 w-full rounded-2xl border border-white/10 object-cover"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-bolt/40 bg-bolt/5 p-6">
            <img
              src={asset('banners/banner-boltz-1200x628.png')}
              alt="Boltz / BTR"
              className="mb-4 w-full rounded-xl border border-bolt/20 object-cover"
            />
            <p className="hud-label text-bolt">MARKET · TRADEABLE</p>
            <h2 className="headline mt-2 text-2xl text-bolt">Boltz / BTR</h2>
            <p className="mt-3 text-sm text-bone/70">
              Gold market coin. Soft TGE via <strong className="text-bone">Jupiter DTF</strong> (Studio /
              secondary later). Public trading unlocks after ≥250,000 BTR purchased — educational gate,
              not a price claim. Riding does <em>not</em> mint BTR.
            </p>
          </article>
          <article className="rounded-2xl border border-cyan/40 bg-cyan/5 p-6">
            <img
              src={asset('banners/banner-rtl-1200x628.png')}
              alt="RTL — Ride the Lightning"
              className="mb-4 w-full rounded-xl border border-cyan/20 object-cover"
            />
            <p className="hud-label text-cyan">EARN · RIDE REWARDS</p>
            <h2 className="headline mt-2 text-2xl text-cyan">RTL / RTL</h2>
            <p className="mt-3 text-sm text-bone/70">
              “Ride the Lightning” — holographic earn asset. Verified rides (Striker-gated) credit RTL.
              Garage / tune / cosmetics spend RTL. Phase 1 may be in-app ledger first; on-chain follows
              published policy.
            </p>
          </article>
        </div>

        <section className="mt-10 overflow-hidden rounded-3xl border border-solana/40 bg-gradient-to-br from-solana/15 via-void to-cyan/10">
          <img
            src={asset('banners/banner-jupiter-launch-1500x500.png')}
            alt="Jupiter DTF soft TGE teaser"
            className="w-full border-b border-white/10 object-cover"
          />
          <div className="p-6 sm:p-8">
            <p className="hud-label text-solana">Sep 29 · Mode B soft TGE</p>
            <h2 className="headline mt-2 text-2xl sm:text-3xl">Jupiter DTF — teaser, not a buy button</h2>
            <p className="mt-3 max-w-2xl text-bone/70">
              Target: <strong className="text-bone">Tuesday Sep 29, 2026 PT</strong>. Path: Jupiter DTF
              sale first. No mint address, price, or live purchase CTA on this portal until rails are
              actually live. Join the free app and watch for launch alerts.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={APP_URL} className="btn-bolt !w-auto !px-8 !rounded-full">
                Enter App — free
              </a>
              <Link
                to="/roadmap"
                className="inline-flex h-14 items-center rounded-full border border-white/20 px-6 font-display font-bold uppercase tracking-wider text-bone/80"
              >
                Roadmap
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <p className="hud-label text-bolt">Honesty caveats</p>
          <ul className="mt-4 space-y-2.5">
            {HONESTY.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-bone/75">
                <span className="text-bolt">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 rounded-2xl border border-white/10 bg-void/80 p-5 text-sm text-bone/60">
          <p className="headline text-base text-bone">One-liner</p>
          <p className="mt-2">
            Ride on Boltorium → earn <span className="text-cyan">RTL</span> → the market token is{' '}
            <span className="text-bolt">Boltz (BTR)</span> on Solana via Jupiter DTF.
          </p>
        </div>
      </div>
    </MarketingShell>
  );
}
