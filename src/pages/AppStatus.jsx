import { Link } from 'react-router-dom';
import MarketingShell from '../components/marketing/MarketingShell.jsx';
import { APP_URL } from '../lib/appUrl.js';

export default function AppStatus() {
  return (
    <MarketingShell title="BOLTORIUM — Live App">
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(56,189,248,0.16),transparent_45%),radial-gradient(ellipse_at_70%_70%,rgba(139,92,246,0.14),transparent_42%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="hud-label text-cyan">LIVE APP</p>
          <h1 className="headline mt-4 text-4xl text-bone sm:text-6xl">
            Boltorium is live.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-bone/70 sm:text-lg">
            The live demo is available now at https://boltorium.co.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href={APP_URL} className="btn-bolt !w-auto !px-8 !rounded-full">
              Enter App
            </a>
            <Link to="/" className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 px-8 font-display font-bold uppercase tracking-wider text-bone/80">
              Back to Boltorium
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
