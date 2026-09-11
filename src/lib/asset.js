/** Public asset URL respecting Vite BASE_URL (project Pages or apex). */
export function asset(path) {
  const clean = String(path || '').replace(/^\/+/, '');
  let base = import.meta.env.BASE_URL || '/';

  if (base.startsWith('/') || /^https?:/i.test(base)) {
    const root = base.endsWith('/') ? base : `${base}/`;
    return `${root}${clean}`;
  }
  if (typeof document !== 'undefined' && document.baseURI) {
    return new URL(clean, document.baseURI).href;
  }
  return `./${clean}`;
}
