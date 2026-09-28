import { Link } from 'react-router-dom';
import MarketingShell from '../components/marketing/MarketingShell.jsx';
import { asset } from '../lib/asset.js';
import { APP_URL } from '../lib/appUrl.js';

const HONESTY = [
  'No live buy button, mint address, or price on this site.',
  'Tokens are never sold via Stripe, Whop, or side brands.',
  'Riding earns RTL — it does not mint Boltz / BTR.',
  'Phase 1 RTL may be in-app / demo credits until on-chain policy ships.',
  'RTL mainnet via boltorium.co / the app only — not Jupiter.',
  'Jupiter DTF soft TGE is for Boltz / BTR only.',
  'Option B: two assets, no auto-convert between Boltz and RTL.',
];

export default function Tokens() {
  return (
    <MarketingShell title="Tokens — BOLTORIUM dual-token">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <p className="hud-label bolt-mark text-bolt">Dual-token protocol</p>
        <h1 className="headline mt-2 text-4xl sm:text-5xl">
          Market <span className="text-molten">Boltz</span> · Earn <span className="text-holo">RTL</span>
        </h1>
        <p className="mt-4 max-w-2xl text-bone/70">
          Ride on Boltorium → earn <strong className="text-holo">RTL</strong> in the app → the market
          token is <strong className="text-bolt">Boltz (BTR)</strong> on Solana via{' '}
          <strong className="text-bone">Jupiter DTF</strong> (BTR only). Soft TGE target{' '}
          <strong className="text-bone">Thu Oct 8, 2026 PT · Mode B</strong> — teaser + interest only
          until sale rails are live. RTL mainnet ships via boltorium.co — not Jupiter.
        </p>

        <div className="gold-card mt-8 overflow-hidden rounded-2xl p-0">
          <img
            src={asset('brand/hero-coin-burst.webp')}
            srcSet={`${asset('brand/hero-coin-burst-768.webp')} 768w, ${asset('brand/hero-coin-burst.webp')} 1280w`}
            sizes="(min-width: 896px) 848px, 92vw"
            width="1280"
            height="720"
            fetchpriority="high"
            alt="Gold Boltz coins and holographic RTL coins bursting around a winged lightning shield"
            className="block aspect-[16/7] w-full rounded-2xl object-cover"
          />
        </div>

        <div className="drip-divider drip-divider--flow mx-3" aria-hidden="true" />

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <article className="gold-card rounded-2xl p-5 sm:p-6">
            <div className="token-visual mb-4">
              <img
                src={asset('brand/boltzcoin-640.webp')}
                srcSet={`${asset('brand/boltzcoin-640.webp')} 640w, ${asset('brand/boltzcoin.webp')} 1024w`}
                sizes="(min-width: 896px) 400px, (min-width: 640px) 46vw, 92vw"
                width="1024"
                height="576"
                loading="lazy"
                decoding="async"
                alt="Gold Boltz (BTR) gear coin marked BOLTZCOIN with a lightning bolt, dripping gold over stacks of gold coins"
              />
            </div>
            <p className="hud-label bolt-mark text-bolt">MARKET · TRADEABLE</p>
            <h2 className="headline mt-2 text-2xl text-molten">Boltz / BTR</h2>
            <p className="mt-3 text-sm text-bone/70">
              Gold market coin. Soft TGE via <strong className="text-bone">Jupiter DTF</strong> (Studio /
              secondary later) — <strong className="text-bone">BTR only</strong>. Public trading unlocks
              after ≥250,000 BTR purchased — educational gate, not a price claim. Riding does{' '}
              <em>not</em> mint BTR.
            </p>
          </article>
          <article className="holo-card rounded-2xl p-5 sm:p-6">
            <div className="token-visual token-visual--holo mb-4">
              <img
                src={asset('brand/rtl-coin-640.webp')}
                srcSet={`${asset('brand/rtl-coin-640.webp')} 640w, ${asset('brand/rtl-coin.webp')} 1280w`}
                sizes="(min-width: 896px) 400px, (min-width: 640px) 46vw, 92vw"
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
                alt="RTL — Ride the Lightning: holographic coin with a lightning bolt, covered in dripping molten gold"
              />
            </div>
            <p className="hud-label bolt-mark bolt-mark--holo text-holo">EARN · RIDE REWARDS</p>
            <h2 className="headline mt-2 text-2xl text-holo">RTL / RTL</h2>
            <p className="mt-3 text-sm text-bone/70">
              “Ride the Lightning” — holographic earn asset. Verified rides (Striker-gated) credit RTL
              through the app. Garage / tune / cosmetics spend RTL. Phase 1 may be in-app ledger first;
              RTL mainnet via boltorium.co only — not Jupiter.
            </p>
          </article>
        </div>

        <section className="mt-10 overflow-hidden rounded-3xl border border-solana/40 bg-gradient-to-br from-solana/15 via-void to-molten/10">
          <img
            src={asset('banners/banner-jupiter-launch-1500x500.png')}
            alt="Jupiter DTF soft TGE teaser"
            className="w-full border-b border-white/10 object-cover"
          />
          <div className="p-6 sm:p-8">
            <p className="hud-label text-solana">Oct 8 · Mode B soft TGE</p>
            <h2 className="headline mt-2 text-2xl sm:text-3xl">Jupiter DTF — teaser, not a buy button</h2>
            <p className="mt-3 max-w-2xl text-bone/70">
              Target: <strong className="text-bone">Thursday Oct 8, 2026 PT</strong>. Path: Jupiter DTF
              sale first — <strong className="text-bone">Boltz / BTR only</strong>. RTL does not launch
              on Jupiter. No mint address, price, or live purchase CTA on this portal until rails are
              actually live. Join the free app and watch for BTR launch alerts.
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
          <p className="hud-label bolt-mark text-bolt">Honesty caveats</p>
          <ul className="mt-4 space-y-2.5">
            {HONESTY.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-bone/75">
                <span className="text-bolt">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="gold-card mt-10 rounded-2xl p-5 text-sm text-bone/70">
          <p className="headline text-base text-bone">One-liner</p>
          <p className="mt-2">
            Ride on Boltorium → earn <span className="text-holo">RTL</span> in the app → the market
            token is <span className="text-bolt">Boltz (BTR)</span> on Solana via Jupiter DTF. RTL
            mainnet via boltorium.co — not Jupiter.
          </p>
        </div>
      </div>
    </MarketingShell>
  );
}
