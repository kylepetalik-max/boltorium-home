import { Link } from 'react-router-dom';
import MarketingShell from '../components/marketing/MarketingShell.jsx';
import { APP_URL } from '../lib/appUrl.js';

const PHASES = [
  {
    status: 'NOW',
    color: 'text-bolt',
    t: 'Marketing front + live demo app',
    d: 'This site is the public marketing homepage. Enter App opens the live Emergent deploy (demo / waitlist loop). Not the app source.',
  },
  {
    status: 'NEXT',
    color: 'text-cyan',
    t: 'Waitlist + native wraps',
    d: 'Harden onboarding, ship iOS/Android Capacitor builds, open community channels for real.',
  },
  {
    status: 'MAINNET',
    color: 'text-solana',
    t: 'Boltz on Solana mainnet',
    d: 'When tokenomics + Striker are locked: real minting, wallet connect beyond demo pubkey. No date theater — status lives here.',
  },
];

export default function Roadmap() {
  return (
    <MarketingShell title="Roadmap / Mainnet — BOLTORIUM">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="hud-label text-solana">Roadmap / Mainnet</p>
        <h1 className="headline mt-2 text-4xl sm:text-5xl">What&apos;s happening</h1>
        <p className="mt-4 text-bone/70">
          Honest timeline language. We are on demo / devnet rails. Mainnet is a milestone, not a
          marketing fake-out.
        </p>
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
            Join via Enter App to be in the waitlist path. We announce mainnet here and in community
            channels — not with inflated rider stats.
          </p>
          <a href={APP_URL} className="btn-bolt mt-4 !w-auto !px-8 !rounded-full">
            Join waitlist / Enter App
          </a>
        </div>
      </div>
    </MarketingShell>
  );
}
