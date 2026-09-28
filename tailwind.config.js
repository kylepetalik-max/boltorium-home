/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#080A09',
        surface: '#101412',
        stroke: '#1C2420',
        // Drip-gold rebrand: primary accent is molten gold (Boltz = gold).
        bolt: '#F2C94C',
        gold: '#D4AF37',
        champagne: '#F5E6A3',
        molten: '#E0A526',
        plasma: '#38BDF8',
        solana: '#8B5CF6',
        cyan: '#38BDF8',
        bone: '#FFFFFF',
        graphite: '#101412',
        danger: '#FF3B5C',
      },
      fontFamily: {
        hud: ['Orbitron', 'Rajdhani', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Rajdhani', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        tag: ['Syne', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        marketing: ['Syne', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: { phone: '430px' },
      boxShadow: {
        bolt: '0 0 24px rgba(242,201,76,0.45)',
        gold: '0 0 24px rgba(212,175,55,0.55)',
        plasma: '0 0 24px rgba(56,189,248,0.4)',
        solana: '0 0 24px rgba(139,92,246,0.45)',
        danger: '0 0 22px rgba(255,59,92,0.55)',
      },
    },
  },
  plugins: [],
};
