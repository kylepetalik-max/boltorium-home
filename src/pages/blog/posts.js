/** Starter blog posts — clear, on-brand, no fake metrics. */
export const POSTS = [
  {
    slug: 'what-is-ride-to-earn',
    title: 'What is ride-to-earn?',
    date: '2026-09-15',
    blurb: 'Real GPS rides, verification, then rewards — not ghost farming.',
    body: [
      'Ride-to-earn means you move in the real world, the app records the path, and eligible sessions earn in-app rewards. Boltorium does that for electric micromobility: EUCs, e-motos, boards, scooters.',
      'The loop is simple on purpose: Join → Ride (GPS) → Earn (verified Boltz) → keep progressing in garage, shop, and missions. Enter App opens the live demo at boltorium.co.',
      'What ride-to-earn is not: inventing coordinates, paying for fake distance, or claiming mainnet token value while still on demo rails. Boltz in the live app today are demo credits until Solana mainnet ships.',
      'If you ride electric and want a HUD that respects safety gates and anti-cheat, that is the product. Marketing stays honest about demo vs mainnet so crews know what they are testing.',
    ],
  },
  {
    slug: 'ev-micromobility-earning',
    title: 'EV micromobility + earning (EUC, e-moto, boards)',
    date: '2026-09-15',
    blurb: 'Why EUCs, e-motos, and boards fit a verify-first earn loop.',
    body: [
      'Electric unicycles, e-motos, boards, and scooters already turn streets into training grounds. Boltorium layers a verify-first earn loop on top of that motion — not a separate “tap to farm” mini-game.',
      'Vehicle classes matter. Different platforms have different speed and IMU envelopes. Striker uses those envelopes so a board session and an e-moto session are not scored the same way.',
      'Earning is tied to verified rides: GPS path, safety gate before ignition, then PASS / REVIEW / FAIL. Eligible rides credit Boltz at class multipliers in the demo app.',
      'Garage and shop exist so the loop feels like a rider culture product — tune your fleet, chase missions, climb crew rank — while Boltz remain demo credits until mainnet.',
    ],
  },
  {
    slug: 'why-solana-for-boltorium',
    title: 'Why Solana for Boltorium (honest demo vs mainnet)',
    date: '2026-09-15',
    blurb: 'Fast settlement fits ride sessions — but we are still demo/devnet.',
    body: [
      'Solana is a fit for ride-to-earn because sessions are frequent and small: you want cheap, fast settlement when rewards leave demo rails. Low fees matter when many short rides settle.',
      'Today the live app uses a demo Solana pubkey and trace hashes. Boltz are demo credits — not mainnet minting. We will not invent TVL, wallet counts, or “live on mainnet” language before it is true.',
      'Mainnet is on the roadmap: tokenomics + Striker locked, then real minting and wallet connect beyond the demo pubkey. Status lives on the Roadmap page — not in inflated splash stats.',
      'Enter App at boltorium.co to stress-test the product on demo rails. The marketing site on www explains the journey; the apex app is where you ride.',
    ],
  },
  {
    slug: 'how-striker-verification-works',
    title: 'How Striker verification works (anti-cheat overview)',
    date: '2026-09-15',
    blurb: 'PASS earns. FAIL earns nothing. No ghost GPS farming.',
    body: [
      'Striker is Boltorium’s verify gate. After you end a ride, verifyRide checks whether the session looks like a real ride for that vehicle class — not a spoofed path.',
      'Checks cover speed envelopes, distance plausibility, and IMU energy bands. Outcomes are PASS (eligible), REVIEW (held), or FAIL (zero Boltz). Ghost GPS farming is designed to fail.',
      'If the OS has no GPS fix, the HUD shows UNCERTAIN speed — we do not invent coordinates. Safety gate (helmet, phone stowed, age, risk) sits before ignition so earn never overrides rider safety copy.',
      'Anti-cheat is qualitative proof we can stand behind today: the gate is live in the demo app. Scaled rewards and mainnet minting are planned; fake rider counts are not part of the story.',
    ],
  },
];

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug) || null;
}
