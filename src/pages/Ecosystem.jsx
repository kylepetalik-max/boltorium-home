import { Link } from 'react-router-dom';
import MarketingShell from '../components/marketing/MarketingShell.jsx';
import { asset } from '../lib/asset.js';
import { APP_URL } from '../lib/appUrl.js';

const PIECES = [
  { t: 'Ride HUD', d: 'Live speed, distance, drops on a neon map. Safety gate before ignition.' },
  { t: 'Garage + Tune', d: 'Fleet classes (EUC, e-moto, scooter, air). Throttle, regen, lights — spend RTL.' },
  { t: 'Shop', d: 'Official + P2P marketplace. Earn loop uses RTL; market coin is Boltz / BTR.' },
  { t: 'Rank & Missions', d: 'Crew leaderboard, weekly missions, airdrop pings.' },
  { t: 'Wallet', d: 'RTL earn balance (app / boltorium.co mainnet path), demo pubkey, ride activity. Boltz / BTR market rails via Jupiter DTF when live — BTR only.' },
  { t: 'Striker', d: 'Vendored @boltorium/striker — verify before RTL credit.' },
];

export default function Ecosystem() {
  return (
    <MarketingShell title="Ecosystem — BOLTORIUM">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="hud-label text-solana">Ecosystem</p>
            <h1 className="headline mt-2 text-4xl sm:text-5xl">The loop riders live in</h1>
            <p className="mt-4 max-w-xl text-bone/70">
              Ride → verify → earn <span className="text-cyan">RTL</span>. Market token is{' '}
              <span className="text-bolt">Boltz (BTR)</span> via Jupiter DTF (BTR only; RTL via boltorium.co). Free Enter App — graffiti
              energy, no Whop paywall.
            </p>
          </div>
          <img src={asset('brand/b-mark.png')} alt="" className="h-24 w-24 object-contain opacity-90 md:h-28 md:w-28" />
        </div>

        <section id="dual-token" className="mt-10 overflow-hidden rounded-3xl border border-bolt/30 bg-void/80">
          <img
            src={asset('banners/banner-dual-square-1080.png')}
            alt="Dual-token: Boltz market · RTL earn"
            className="mx-auto max-h-64 w-full object-cover sm:max-h-80"
          />
          <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <p className="hud-label text-bolt">MARKET</p>
              <p className="headline mt-1 text-xl text-bolt">Boltz / BTR</p>
              <p className="mt-2 text-sm text-bone/65">
                Tradeable gold coin. Soft TGE via Jupiter DTF (BTR only) — Tue Sep 29, 2026 PT Mode B teaser. RTL does not launch on Jupiter.
                ≥250k BTR purchased unlocks public (educational). Riding does not mint BTR.
              </p>
            </div>
            <div>
              <p className="hud-label text-cyan">EARN</p>
              <p className="headline mt-1 text-xl text-cyan">RTL / RTL</p>
              <p className="mt-2 text-sm text-bone/65">
                Holographic ride rewards. Striker PASS → RTL. Phase 1 may be in-app credits. Option B:
                two assets, no auto-convert.
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 px-6 pb-6 sm:px-8">
            <Link to="/tokens" className="font-display text-sm font-bold uppercase tracking-wider text-bolt hover:text-cyan">
              Full dual-token page →
            </Link>
          </div>
        </section>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PIECES.map((p) => (
            <div key={p.t} className="holo-card rounded-2xl p-5">
              <p className="headline text-lg text-bolt">{p.t}</p>
              <p className="mt-2 text-sm text-bone/65">{p.d}</p>
            </div>
          ))}
        </div>
        <a href={APP_URL} className="btn-bolt mt-10 !w-auto !px-8 !rounded-full">Enter App — free</a>
      </div>
    </MarketingShell>
  );
}
