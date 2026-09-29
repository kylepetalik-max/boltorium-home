/** Decorative lightning strikes + rising sparks around the hero (CSS-animated, static when reduced). */
const BOLTS = [
  { style: { left: '6%', top: '14%' }, d: 'M26 0 14 40 27 42 9 86 22 88 4 128' },
  { style: { right: '7%', top: '20%' }, d: 'M8 0 22 36 10 39 28 80 15 82 32 124' },
  { style: { left: '14%', bottom: '18%' }, d: 'M22 0 12 30 24 32 6 70 18 72 8 100' },
  { style: { right: '15%', bottom: '24%' }, d: 'M14 0 26 28 14 31 30 66 18 68 26 96' },
  { style: { left: '30%', top: '6%' }, d: 'M20 0 12 24 22 26 10 52' },
  { style: { right: '30%', top: '9%' }, d: 'M10 0 20 22 12 24 22 48' },
];

const SPARKS = [
  { left: '22%', top: '62%', d: '-0.2s', dx: '-12px' },
  { left: '31%', top: '48%', d: '-1.1s', dx: '8px' },
  { left: '44%', top: '70%', d: '-2.4s', dx: '-6px' },
  { left: '57%', top: '66%', d: '-0.7s', dx: '14px' },
  { left: '66%', top: '44%', d: '-3.2s', dx: '-10px' },
  { left: '76%', top: '58%', d: '-1.8s', dx: '6px' },
  { left: '12%', top: '40%', d: '-3.9s', dx: '10px' },
  { left: '88%', top: '46%', d: '-2.9s', dx: '-8px' },
];

export default function HeroSparks() {
  return (
    <div className="hero-sparks" aria-hidden="true">
      {BOLTS.map((b, n) => (
        <svg key={n} className="hero-bolt" style={b.style} viewBox="0 0 36 130" fill="none">
          <path d={b.d} stroke="#F2C94C" strokeOpacity=".55" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d={b.d} stroke="#FFF8D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ))}
      {SPARKS.map((s, n) => (
        <span
          key={n}
          className="hero-spark"
          style={{ left: s.left, top: s.top, animationDelay: s.d, '--dx': s.dx }}
        />
      ))}
    </div>
  );
}
