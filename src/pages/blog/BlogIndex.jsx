import { Link } from 'react-router-dom';
import MarketingShell from '../../components/marketing/MarketingShell.jsx';
import { POSTS } from './posts.js';

export default function BlogIndex() {
  return (
    <MarketingShell title="Blog — BOLTORIUM">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="hud-label text-cyan">Blog</p>
        <h1 className="headline mt-2 text-4xl sm:text-5xl">Field notes</h1>
        <p className="mt-4 text-bone/70">
          Short, literal posts on ride-to-earn, EV micromobility, Solana honesty, and Striker.
          No fake traction metrics.
        </p>
        <ul className="mt-10 space-y-4">
          {POSTS.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/blog/${p.slug}`}
                className="block rounded-2xl border border-white/10 bg-void/80 p-5 transition hover:border-cyan/40"
              >
                <p className="font-mono text-[10px] tracking-wider text-bone/40">{p.date}</p>
                <h2 className="headline mt-1 text-xl text-bolt">{p.title}</h2>
                <p className="mt-2 text-sm text-bone/65">{p.blurb}</p>
                <span className="mt-3 inline-block font-display text-xs font-bold uppercase tracking-wider text-cyan">
                  Read →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MarketingShell>
  );
}
