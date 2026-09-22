/** Starter blog posts — clear, on-brand, no fake metrics. Dual-token: earn=RTL, market=Boltz/BTR. */
export const POSTS = [
  {
    slug: 'what-is-ride-to-earn',
    title: 'What is ride-to-earn?',
    date: '2026-09-15',
    blurb: 'Real GPS rides, verification, then RTL rewards — not ghost farming.',
    body: [
      'Ride-to-earn means you move in the real world, the app records the path, and eligible sessions earn in-app rewards. Boltorium does that for electric micromobility: EUCs, e-motos, boards, scooters.',
      'The loop is simple on purpose: Join → Ride (GPS) → Earn (verified RTL) → keep progressing in garage, shop, and missions. Free Enter App opens the live demo at boltorium.co.',
      'What ride-to-earn is not: inventing coordinates, paying for fake distance, or claiming mainnet market-token value while earn is still Phase 1. RTL is the earn asset; Boltz (BTR) is the separate market coin.',
      'If you ride electric and want a HUD that respects safety gates and anti-cheat, that is the product. Marketing stays honest about earn vs market so crews know what they are testing.',
    ],
  },
  {
    slug: 'ev-micromobility-earning',
    title: 'EV micromobility + earning (EUC, e-moto, boards)',
    date: '2026-09-15',
    blurb: 'Why EUCs, e-motos, and boards fit a verify-first RTL earn loop.',
    body: [
      'Electric unicycles, e-motos, boards, and scooters already turn streets into training grounds. Boltorium layers a verify-first earn loop on top of that motion — not a separate “tap to farm” mini-game.',
      'Vehicle classes matter. Different platforms have different speed and IMU envelopes. Striker uses those envelopes so a board session and an e-moto session are not scored the same way.',
      'Earning is tied to verified rides: GPS path, safety gate before ignition, then PASS / REVIEW / FAIL. Eligible rides credit RTL (“Ride the Lightning”) — Phase 1 may be in-app / demo credits. Riding does not mint Boltz / BTR.',
      'Garage and shop exist so the loop feels like a rider culture product — tune your fleet, chase missions, climb crew rank — while the market token (Boltz) launches separately via Jupiter DTF.',
    ],
  },
  {
    slug: 'why-solana-for-boltorium',
    title: 'Why Solana for Boltorium (honest demo vs mainnet)',
    date: '2026-09-15',
    blurb: 'Fast settlement fits ride sessions — dual-token on Solana via Jupiter DTF.',
    body: [
      'Solana is a fit for ride-to-earn because sessions are frequent and small: you want cheap, fast settlement when rewards leave Phase 1 rails. Low fees matter when many short rides settle.',
      'Today the live app uses a demo Solana pubkey and trace hashes. RTL earn may start as in-app credits. Boltz (BTR) soft TGE targets Tue Sep 29, 2026 PT via Jupiter DTF — we will not invent TVL, prices, or a live buy button before rails are live.',
      'Dual-token Option B: two assets, no auto-convert. Market = Boltz / BTR. Earn = RTL. Status lives on the Roadmap and Tokens pages — not in inflated splash stats.',
      'Free Enter App at boltorium.co to stress-test the product. The marketing site on www explains the journey; the apex app is where you ride.',
    ],
  },
  {
    slug: 'how-striker-verification-works',
    title: 'How Striker verification works (anti-cheat overview)',
    date: '2026-09-15',
    blurb: 'PASS earns RTL. FAIL earns nothing. No ghost GPS farming.',
    body: [
      'Striker is Boltorium’s verify gate. After you end a ride, verifyRide checks whether the session looks like a real ride for that vehicle class — not a spoofed path.',
      'Checks cover speed envelopes, distance plausibility, and IMU energy bands. Outcomes are PASS (eligible for RTL), REVIEW (held), or FAIL (zero RTL). Ghost GPS farming is designed to fail. Riding never mints BTR.',
      'If the OS has no GPS fix, the HUD shows UNCERTAIN speed — we do not invent coordinates. Safety gate (helmet, phone stowed, age, risk) sits before ignition so earn never overrides rider safety copy.',
      'Anti-cheat is qualitative proof we can stand behind today: the gate is live in the demo app. Scaled RTL and Jupiter DTF market rails are planned; fake rider counts are not part of the story.',
    ],
  },
  {
    slug: 'dual-token-boltz-rtl',
    title: 'Dual-token: Boltz market · RTL earn',
    date: '2026-09-22',
    blurb: 'Locked story: market = Boltz / BTR, earn = RTL, Jupiter DTF soft TGE teaser Sep 29.',
    body: [
      'Boltorium runs a dual-token protocol. Market (tradeable) = Boltz / BTR — gold. Earn (ride rewards) = RTL / RTL — “Ride the Lightning,” holographic. Option B: two assets, no auto-convert.',
      'Day-1 rider loop: free Enter App at boltorium.co → ride → Striker verifies → earn RTL. Phase 1 RTL may be in-app / demo credits. Riding does not mint BTR. Tokens are never sold via Stripe, Whop, or side brands.',
      'Boltz soft TGE target: Tuesday Sep 29, 2026 PT Mode B via Jupiter DTF (Studio / secondary later). Until sale rails are live, the portal shows teaser + interest only — no buy button, mint address, or price.',
      'Educational go-public gate: ≥250,000 BTR purchased unlocks public trading. Full explainer lives at /tokens on www.boltorium.co.',
    ],
  },
];

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug) || null;
}
