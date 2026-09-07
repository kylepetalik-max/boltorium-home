/** Public asset URL that works on GitHub Pages project site. */
export function asset(path) {
  const clean = String(path || '').replace(/^\/+/, '');
  let base = import.meta.env.BASE_URL || './';

  if (typeof window !== 'undefined' && window.location?.hostname?.endsWith('github.io')) {
    base = '/boltorium-home/';
  }

  if (base.startsWith('/') || /^https?:/i.test(base)) {
    const root = base.endsWith('/') ? base : `${base}/`;
    return `${root}${clean}`;
  }
  if (typeof document !== 'undefined' && document.baseURI) {
    return new URL(clean, document.baseURI).href;
  }
  return `./${clean}`;
}
