import { Link } from 'react-router-dom';
import MarketingShell from '../components/marketing/MarketingShell.jsx';

export default function AppStatus() {
  return (
    <MarketingShell title="BOLTORIUM — App Status">
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(56,189,248,0.16),transparent_45%),radial-gradient(ellipse_at_70%_70%,rgba(139,92,246,0.14),transparent_42%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="hud-label text-cyan">APP STATUS · HOSTING RESTORE</p>
          <h1 className="headline mt-4 text-4xl text-bone sm:text-6xl">
            The live app is temporarily offline.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-bone/70 sm:text-lg">
            We&apos;re restoring app hosting and SSL now. The marketing portal is online, and this
            page will remain the status point while the app comes back.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-bone/45">
            No ETA is being provided while restoration is in progress.
          </p>
          <Link to="/" className="btn-bolt mx-auto mt-10 !w-auto !px-8 !rounded-full">
            Back to Boltorium
          </Link>
        </div>
      </section>
    </MarketingShell>
  );
}
