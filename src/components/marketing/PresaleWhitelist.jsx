import { asset } from '../../lib/asset.js';
import { APP_URL } from '../../lib/appUrl.js';

/**
 * Presale whitelist announcement — first 500 riders.
 * Announcement only: no prices, no buy / mint / connect-wallet UI, no contract address.
 * CTA reuses APP_URL (same destination as "Enter App").
 */
export default function PresaleWhitelist() {
  return (
    <section
      id="presale-whitelist"
      aria-labelledby="presale-whitelist-heading"
      className="relative overflow-hidden border-b border-gold/20 bg-void"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_25%_30%,rgba(212,175,55,0.18),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(212,175,55,0.08),transparent_45%)]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:py-16">
        <picture className="mx-auto block w-[min(62vw,260px)] md:w-full md:max-w-[440px]">
          <source srcSet={asset('presale/boltorium-presale-500-tags.webp')} type="image/webp" />
          <img
            src={asset('presale/boltorium-presale-500-tags.png')}
            alt="Boltz presale whitelist poster: invite only, 500 spots then it locks, first 500 riders get whitelisted, mainnet planned Tue Sep 29"
            width="1080"
            height="1350"
            loading="eager"
            decoding="async"
            className="h-auto w-full rounded-2xl border border-gold/40 shadow-gold"
          />
        </picture>

        <div className="text-center md:text-left">
          <p className="hud-label !text-gold">Boltz presale whitelist · first 500</p>
          <h2
            id="presale-whitelist-heading"
            className="headline mt-3 text-3xl leading-tight text-gold sm:text-4xl lg:text-5xl"
          >
            500 WHITELIST SPOTS. THEN IT LOCKS.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-bone/80 sm:text-lg md:mx-0">
            First 500 riders to sign up free at boltorium.co get whitelisted to buy Boltz before the
            public mainnet launch (planned Tue Sep 29 PT).
          </p>
          <div className="mt-7 flex justify-center md:justify-start">
            <a
              href={APP_URL}
              className="inline-flex h-14 items-center justify-center rounded-full bg-gold px-8 font-display text-lg font-extrabold uppercase tracking-wider text-void shadow-gold transition hover:brightness-110 active:scale-[0.98]"
            >
              Sign up free
            </a>
          </div>
          <p className="mt-3 text-xs text-bone/50">
            Invite only. Free to join. No purchase needed. Not financial advice.
          </p>
        </div>
      </div>
    </section>
  );
}
