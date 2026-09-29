import { useCallback, useEffect, useRef, useState } from 'react';
import { LIVE_PLAYLIST } from '../lib/playlist.js';

const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';

function prefersReducedMotion() {
  return typeof window !== 'undefined' && !!window.matchMedia?.(REDUCED_QUERY).matches;
}

/**
 * Muted, inline, autoplaying rider-clip background. Cycles the playlist and wraps
 * around forever (a single clip uses native `loop`). Renders nothing for
 * reduced-motion users or if every clip fails — the static art underneath shows.
 */
export default function HeroVideo({ poster, className = '' }) {
  const [reduced, setReduced] = useState(prefersReducedMotion);
  const [i, setI] = useState(0);
  const [failed, setFailed] = useState(0);
  const ref = useRef(null);
  const single = LIVE_PLAYLIST.length === 1;

  useEffect(() => {
    const mq = window.matchMedia?.(REDUCED_QUERY);
    if (!mq) return undefined;
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const next = useCallback(() => setI((n) => (n + 1) % LIVE_PLAYLIST.length), []);
  const onError = useCallback(() => {
    setFailed((f) => f + 1);
    next();
  }, [next]);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // iOS needs the muted attribute present for inline autoplay.
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute('muted', '');
    const p = v.play?.();
    if (p && typeof p.catch === 'function') p.catch(() => {});
  }, [i, reduced]);

  if (reduced || failed >= LIVE_PLAYLIST.length) return null;

  return (
    <video
      ref={ref}
      src={LIVE_PLAYLIST[i]}
      poster={i === 0 ? poster : undefined}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      muted
      autoPlay
      playsInline
      loop={single}
      preload="auto"
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
      onEnded={single ? undefined : next}
      onError={onError}
    />
  );
}
