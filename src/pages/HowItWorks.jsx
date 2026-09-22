import { Link } from 'react-router-dom';
import MarketingShell from '../components/marketing/MarketingShell.jsx';
import { APP_URL } from '../lib/appUrl.js';

const GET_STARTED = [
  {
    n: '01',
    t: 'Join',
    d: 'Hit Enter App → https://boltorium.co. Free — no Whop, no paid membership paywall for the day-1 loop.',
  },
  {
    n: '02',
    t: 'Ride',
    d: 'Accept the safety gate, then ride. The HUD streams live GPS. No fix → speed shows UNCERTAIN — we never invent coords.',
  },
  {
    n: '03',
    t: 'Earn RTL',
    d: 'Striker verifyRide grades the session. PASS credits RTL (“Ride the Lightning”). Phase 1 may be in-app / demo credits. FAIL earns nothing. Riding does not mint BTR.',
  },
  {
    n: '04',
    t: 'Market Boltz',
    d: 'Boltz (BTR) is the tradeable market coin. Soft TGE via Jupiter DTF — target Tue Sep 29, 2026 PT Mode B. Teaser + interest only until live — no buy button here yet.',
  },
];

const DETAIL = [
  {
    t: 'Safety gate before ignition',
    d: 'Helmet, phone stowed, age, and risk acknowledgements sit before the ride starts. Earn copy never overrides safety.',
  },
  {
    t: 'Striker anti-cheat',
    d: 'Envelope checks on speed, distance, and IMU energy by vehicle class. PASS / REVIEW / FAIL — no ghost GPS farming.',
  },
  {
    t: 'RTL = earn · Boltz = market',
    d: 'Eligible sessions credit RTL. Boltz / BTR is the separate market token (Jupiter DTF). Option B: two assets, no auto-convert. Tokens never sold via Stripe or Whop.',
  },
  {
    t: 'Progress the loop',
    d: 'Tune the garage, shop gear, climb crew rank, clear missions. Free Enter App — denser than a splash-only funnel.',
  },
];

export default function HowItWorks() {
  return (
    <MarketingShell title="How it works — BOLTORIUM">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="hud-label text-cyan">How it works</p>
        <h1 className="headline mt-2 text-4xl sm:text-5xl">Get started</h1>
        <p className="mt-4 text-bone/70">
          Join → Ride → Earn RTL. Free Enter App at boltorium.co. Market token is Boltz (BTR) via
          Jupiter DTF — see Tokens for the dual-token story.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {GET_STARTED.map((s) => (
            <div key={s.n} className="rounded-2xl border border-cyan/30 bg-void/80 p-5">
              <p className="font-mono text-xs text-cyan">{s.n}</p>
              <h2 className="headline mt-2 text-xl text-bolt">{s.t}</h2>
              <p className="mt-2 text-sm text-bone/65">{s.d}</p>
            </div>
          ))}
        </div>

        <h2 className="headline mt-14 text-2xl sm:text-3xl">Under the hood</h2>
        <div className="mt-6 space-y-6">
          {DETAIL.map((s) => (
            <article key={s.t} className="cv-card p-5 sm:p-6">
              <h3 className="headline text-xl text-bolt">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bone/70">{s.d}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
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
            to="/roadmap"
            className="inline-flex h-14 items-center rounded-full border border-white/20 px-6 font-display font-bold uppercase tracking-wider"
          >
            Roadmap
          </Link>
        </div>
      </div>
    </MarketingShell>
  );
}
