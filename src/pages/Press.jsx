import { Link } from 'react-router-dom';
import MarketingShell from '../components/marketing/MarketingShell.jsx';
import { PRESS_EMAIL, X_URL } from '../lib/community.js';

const CATEGORIES = [
  'Solana ecosystem / project directories',
  'Web3 app & dApp listing sites',
  'EV / micromobility blogs and newsletters',
  'Electric unicycle & e-moto community sites',
  'Ride-to-earn / move-to-earn roundup articles',
  'Indie maker / startup showcases',
  'Local EV / urban mobility podcasts',
  'Open-source / GitHub awesome-lists (honest demo label)',
];

export default function Press() {
  return (
    <MarketingShell title="Press & listings — BOLTORIUM">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="hud-label text-cyan">For press &amp; listings</p>
        <h1 className="headline mt-2 text-4xl sm:text-5xl">Outreach checklist</h1>
        <p className="mt-4 text-bone/70">
          We do not buy backlinks. This page is a human checklist for relevant, non-spam outreach.
          Label Boltorium honestly: earn = <strong className="text-cyan">RTL</strong>, market ={' '}
          <strong className="text-bolt">Boltz / BTR</strong> via Jupiter DTF (BTR only; RTL via boltorium.co) — no fake rider counts,
          prices, or live buy claims before rails are live.
        </p>

        <div className="mt-8 rounded-2xl border border-bolt/30 bg-bolt/5 p-5">
          <p className="hud-label text-bolt">Contact</p>
          <p className="mt-2 text-sm text-bone/75">
            Press &amp; listings:{' '}
            <a className="text-cyan hover:text-bolt" href={`mailto:${PRESS_EMAIL}`}>
              {PRESS_EMAIL}
            </a>
          </p>
          <p className="mt-2 text-sm text-bone/60">
            Social:{' '}
            <a className="text-cyan hover:text-bolt" href={X_URL} target="_blank" rel="noreferrer">
              x.com/boltoriumrtl
            </a>
          </p>
          <p className="mt-3 font-mono text-[10px] tracking-wider text-bone/40">
            LIVE APP · https://boltorium.co · MARKETING · https://www.boltorium.co · TOKENS · /tokens
          </p>
        </div>

        <h2 className="headline mt-10 text-2xl text-bone">Suggested site categories</h2>
        <p className="mt-2 text-sm text-bone/60">
          Pitch only where the fit is real. Prefer editorial mentions over directory spam.
        </p>
        <ul className="mt-6 space-y-3">
          {CATEGORIES.map((c, i) => (
            <li
              key={c}
              className="flex gap-3 rounded-xl border border-white/10 bg-void/70 px-4 py-3 text-sm text-bone/75"
            >
              <span className="font-mono text-xs text-cyan">{String(i + 1).padStart(2, '0')}</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border border-white/10 p-5 text-sm text-bone/60">
          <p className="headline text-base text-bone">One-liner (honest)</p>
          <p className="mt-2">
            Ride on Boltorium → earn RTL in the app → the market token is Boltz (BTR) on Solana via
            Jupiter DTF (BTR only). RTL mainnet via boltorium.co — not Jupiter. Soft TGE target Tue
            Sep 29, 2026 PT Mode B. Free Enter App — no Whop, no fake buy button yet.
          </p>
          <Link to="/tokens" className="mt-3 inline-flex font-display text-sm font-bold uppercase tracking-wider text-bolt hover:text-cyan">
            Dual-token page →
          </Link>
        </div>
      </div>
    </MarketingShell>
  );
}
