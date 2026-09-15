import { Link } from 'react-router-dom';
import MarketingShell from '../components/marketing/MarketingShell.jsx';
import { APP_URL } from '../lib/appUrl.js';

const PHASES = [
  {
    status: 'LIVE',
    color: 'text-bolt',
    t: 'Marketing front + live demo app',
    d: 'www.boltorium.co is the marketing portal. Enter App opens the live Emergent demo (GPS rides, Striker, Boltz demo credits, garage/shop/missions). Not the app source.',
  },
  {
    status: 'NEXT',
    color: 'text-cyan',
    t: 'Waitlist + native wraps',
    d: 'Harden onboarding, ship iOS/Android Capacitor builds, open a real Discord invite when ready.',
  },
  {
    status: 'MAINNET',
    color: 'text-solana',
    t: 'Boltz on Solana mainnet',
    d: 'When tokenomics + Striker are locked: real minting, wallet connect beyond demo pubkey. No date theater — status lives here.',
  },
];

const LIVE = [
  'GPS ride tracking',
  'Striker verify gate',
  'Boltz demo credits',
  'Garage / shop / missions in live app',
  'Marketing portal on www',
];

const PLANNED = [
  'Solana mainnet',
  'Native store wraps',
  'Scaled rewards',
];

export default function Roadmap() {
  return (
    <MarketingShell title="Roadmap / Mainnet — BOLTORIUM">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="hud-label text-solana">Roadmap / Mainnet</p>
        <h1 className="headline mt-2 text-4xl sm:text-5xl">What&apos;s happening</h1>
        <p className="mt-4 text-bone/70">
          Honest timeline language. We are on demo / devnet rails. Mainnet is a milestone, not a
          marketing fake-out. No fabricated rider stats or TVL.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-bolt/40 bg-bolt/5 p-5">
            <p className="hud-label text-bolt">LIVE today</p>
            <ul className="mt-3 space-y-1.5 text-sm text-bone/75">
              {LIVE.map((x) => (
                <li key={x}>✓ {x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-void/80 p-5">
            <p className="hud-label text-solana">PLANNED</p>
            <ul className="mt-3 space-y-1.5 text-sm text-bone/65">
              {PLANNED.map((x) => (
                <li key={x}>→ {x}</li>
              ))}
            </ul>
          </div>
        </div>

        <ol className="mt-10 space-y-4">
          {PHASES.map((p) => (
            <li key={p.t} className="rounded-2xl border border-white/10 bg-void/80 p-5">
              <p className={`hud-label ${p.color}`}>{p.status}</p>
              <h2 className="headline mt-1 text-xl text-bone">{p.t}</h2>
              <p className="mt-2 text-sm text-bone/65">{p.d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 rounded-2xl border border-bolt/30 bg-bolt/5 p-5">
          <p className="headline text-bolt">Mainnet launch CTA</p>
          <p className="mt-2 text-sm text-bone/70">
            Join via Enter App to be in the waitlist path. We announce mainnet here and on X —
            not with inflated rider stats.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={APP_URL} className="btn-bolt !w-auto !px-8 !rounded-full">
              Enter App
            </a>
            <Link
              to="/press"
              className="inline-flex h-14 items-center rounded-full border border-white/20 px-6 font-display font-bold uppercase tracking-wider text-bone/80"
            >
              Press &amp; listings
            </Link>
          </div>
        </div>
      </div>
    </MarketingShell>
  );
}
