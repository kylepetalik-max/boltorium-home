import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { asset } from '../../lib/asset.js';
import { APP_URL } from '../../lib/appUrl.js';
import { DISCORD_LABEL, DISCORD_URL, X_URL } from '../../lib/community.js';

const ROUTES = [
  { to: '/how-it-works', label: 'How it works' },
  { to: '/ecosystem', label: 'Ecosystem' },
  { to: '/tokens', label: 'Tokens' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/blog', label: 'Blog' },
];

const SECTIONS = [
  { id: 'trust', label: 'Trust' },
  { id: 'community', label: 'Community' },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function SiteNav() {
  const loc = useLocation();
  const nav = useNavigate();

  const goSection = (id) => {
    if (loc.pathname !== '/') {
      nav('/');
      setTimeout(() => scrollToId(id), 80);
    } else {
      scrollToId(id);
    }
  };

  return (
    <header className="site-nav sticky top-0 z-40 border-b border-bolt/20 bg-void/85 shadow-[0_1px_0_rgba(242,201,76,0.08),0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-1.5" aria-label="BOLTORIUM home">
          <img
            src={asset('brand/boltorium-badge-200.webp')}
            alt="BOLTORIUM winged gold gear badge"
            width="200"
            height="172"
            className="brand-glow h-10 w-auto object-contain sm:h-11 lg:h-10"
          />
          <img
            src={asset('brand/boltorium-wordmark-drip-320.webp')}
            alt=""
            aria-hidden="true"
            width="320"
            height="127"
            className="hidden h-8 w-auto object-contain min-[400px]:block sm:h-9 lg:hidden xl:block xl:h-7"
          />
        </Link>
        <nav className="hidden items-center gap-0.5 lg:flex">
          {ROUTES.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-1.5 py-1.5 font-display text-[11px] font-bold uppercase tracking-wide xl:px-2 transition ${
                  isActive ? 'bg-bolt/15 text-bolt shadow-[inset_0_0_0_1px_rgba(242,201,76,0.35)]' : 'text-bone/70 hover:text-bolt'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goSection(s.id)}
              className="whitespace-nowrap rounded-full px-1.5 py-1.5 font-display text-[11px] font-bold uppercase tracking-wide text-bone/70 transition hover:text-bolt xl:px-2"
            >
              {s.label}
            </button>
          ))}
          <a
            href={X_URL}
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap rounded-full px-1.5 py-1.5 font-display text-[11px] font-bold uppercase tracking-wide text-bone/70 transition hover:text-bolt xl:px-2"
          >
            X
          </a>
          <a
            href={DISCORD_URL}
            title={DISCORD_LABEL}
            className="whitespace-nowrap rounded-full px-1.5 py-1.5 font-display text-[11px] font-bold uppercase tracking-wide text-bone/70 transition hover:text-bolt xl:px-2"
          >
            Discord
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/how-it-works"
            className="hidden rounded-full border border-champagne/40 px-3 py-1.5 font-display text-[11px] font-bold uppercase tracking-wider whitespace-nowrap text-champagne transition hover:bg-champagne/10 sm:inline-flex"
          >
            Learn
          </Link>
          <a
            href={APP_URL}
            className="btn-molten-sm inline-flex whitespace-nowrap rounded-full px-3.5 py-1.5 font-display text-[11px] font-extrabold uppercase tracking-wider"
          >
            Enter App
          </a>
        </div>
      </div>
      <div className="flex gap-1 overflow-x-auto border-t border-white/5 px-3 py-2 lg:hidden">
        {ROUTES.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `shrink-0 rounded-full px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider ${
                isActive ? 'bg-bolt/15 text-bolt' : 'text-bone/55'
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => goSection(s.id)}
            className="shrink-0 rounded-full px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-bone/55"
          >
            {s.label}
          </button>
        ))}
        <a
          href={X_URL}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-full px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-bone/55"
        >
          X
        </a>
        <a
          href={DISCORD_URL}
          className="shrink-0 rounded-full px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-bone/55"
        >
          Discord
        </a>
      </div>
    </header>
  );
}
