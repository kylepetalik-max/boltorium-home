import { Link } from 'react-router-dom';
import MarketingShell from '../components/marketing/MarketingShell.jsx';
import { asset } from '../lib/asset.js';
import { APP_URL } from '../lib/appUrl.js';

const PHASES = [
  {
    status: 'LIVE',
    color: 'text-bolt',
    t: 'Marketing front + free Enter App',
    d: 'www.boltorium.co explains dual-token (earn RTL · market Boltz). Enter App opens the live Emergent demo at boltorium.co — free, no Whop. Not the app source.',
  },
  {
    status: 'SEP 29',
    color: 'text-cyan',
    t: 'Jupiter DTF soft TGE teaser (Mode B)',
    d: 'Target Tue Sep 29, 2026 PT: Boltz / BTR soft TGE via Jupiter DTF (BTR only — RTL does not launch on Jupiter). Portal shows teaser + interest CTA only — no live buy button, mint address, or price until rails are live. Studio / secondary later.',
  },
  {
    status: 'NEXT',
    color: 'text-solana',
    t: 'RTL mainnet via boltorium.co + native wraps',
    d: 'RTL mainnet ships via boltorium.co / the app only — not Jupiter. Migrates per published earn policy. Harden onboarding, ship iOS/Android Capacitor builds, open Discord when ready. Public BTR trading after ≥250k BTR purchased (educational gate).',
  },
];

const LIVE = [
  'GPS ride tracking',
  'Striker verify gate',
  'RTL earn (Phase 1 may be in-app / demo credits)',
  'Garage / shop / missions in live app',
  'Dual-token story on www',
];

const PLANNED = [
  'Jupiter DTF soft TGE for Boltz / BTR only (Sep 29 Mode B target)',
  'RTL mainnet via boltorium.co / the app (not Jupiter)',
  'Native store wraps',
  'Public after ≥250k BTR purchased',
];

export default function Roadmap() {
  return (
    <MarketingShell title="Roadmap / Mainnet — BOLTORIUM">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="hud-label text-solana">Roadmap / Launch</p>
        <h1 className="headline mt-2 text-4xl sm:text-5xl">What&apos;s happening</h1>
        <p className="mt-4 text-bone/70">
          Honest timeline. Earn = RTL via the app / boltorium.co. Market = Boltz / BTR via Jupiter DTF
          (BTR only). Soft TGE target <strong className="text-bone">Tue Sep 29, 2026 PT Mode B</strong>{' '}
          — teaser only until live. No fabricated rider stats, prices, or buy buttons.
        </p>

        <img
          src={asset('banners/banner-jupiter-launch-1500x500.png')}
          alt="Jupiter DTF Sep 29 soft TGE teaser"
          className="mt-8 w-full rounded-2xl border border-white/10 object-cover"
        />

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
          <p className="headline text-bolt">Interest CTA</p>
          <p className="mt-2 text-sm text-bone/70">
            Free Enter App to ride and earn RTL. Sep 29 Jupiter DTF (BTR) alerts land on X and this roadmap —
            not with inflated stats or a fake buy button.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={APP_URL} className="btn-bolt !w-auto !px-8 !rounded-full">
              Enter App
            </a>
            <Link
              to="/tokens"
              className="inline-flex h-14 items-center rounded-full border border-bolt/40 px-6 font-display font-bold uppercase tracking-wider text-bolt"
            >
              Tokens
            </Link>
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
