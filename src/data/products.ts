import { Product, ProductCategory } from '@/lib/types'

// ─────────────────────────────────────────────────────────────
// PRODUCT IMAGES — original in-house SVG target artwork
// Stored locally in /public/images/products. Swap in real product
// photography later by replacing these files (keep the same paths).
// ─────────────────────────────────────────────────────────────

const IMG = {
  splatterBull: '/images/products/splatter-bullseye.svg',
  splatterSil:  '/images/products/splatter-silhouette.svg',
  sightGrid:    '/images/products/sight-in-grid.svg',
  rimfireDots:  '/images/products/rimfire-dots.svg',
  paperBull:    '/images/products/paper-bullseye.svg',
  steelGong:    '/images/products/steel-gong.svg',
  steelPopper:  '/images/products/steel-popper.svg',
  spinner:      '/images/products/reactive-spinner.svg',
  stand:        '/images/products/target-stand.svg',
  accessories:  '/images/products/accessories.svg',
}

// Category list powering the shop filter and nav.
export const CATEGORIES: { id: ProductCategory; label: string }[] = [
  { id: 'splatter-targets', label: 'Splatter Targets' },
  { id: 'paper-targets',    label: 'Paper Targets' },
  { id: 'steel-targets',    label: 'Steel Targets' },
  { id: 'reactive-targets', label: 'Reactive Targets' },
  { id: 'target-stands',    label: 'Stands & Frames' },
  { id: 'accessories',      label: 'Accessories' },
]

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export const PRODUCTS: Product[] = [
  // ── SPLATTER TARGETS ──────────────────────────────────────
  {
    id: 'si-0001',
    title: 'Splatter Burst 8" Bullseye',
    slug: 'splatter-burst-8-bullseye',
    price: 19.99,
    description:
      'Our flagship reactive paper target. Every hit bursts into a bright fluorescent ring so you can see exactly where your rounds land — no spotting scope, no walking downrange.',
    details: [
      '8 inch bullseye, high-visibility impact rings',
      'Pack of 25 targets',
      'Heavyweight non-adhesive paper',
      'Ideal for pistol and rimfire at 10–25 yards',
    ],
    categories: ['splatter-targets'],
    image: IMG.splatterBull,
    images: [IMG.splatterBull],
    badge: 'Best Seller',
    inStock: true,
  },
  {
    id: 'si-0002',
    title: 'Splatter Burst 12" Bullseye',
    slug: 'splatter-burst-12-bullseye',
    price: 24.99,
    description:
      'The 12-inch big brother of our best seller. A larger scoring area and bold reactive rings make it easy to confirm hits from the bench at distance.',
    details: [
      '12 inch bullseye with fluorescent impact reveal',
      'Pack of 10 targets',
      'Tear-resistant paper stock',
      'Great for rifle sight-in to 100 yards',
    ],
    categories: ['splatter-targets'],
    image: IMG.splatterBull,
    images: [IMG.splatterBull],
    inStock: true,
  },
  {
    id: 'si-0003',
    title: 'Diamond Sight-In Splatter',
    slug: 'diamond-sight-in-splatter',
    price: 21.99,
    description:
      'A 1-inch grid with a diamond aiming point and reactive impact rings — built for precise zeroing. Read your group at a glance and dial it in fast.',
    details: [
      '1 inch grid, diamond center aiming point',
      'Pack of 25 targets',
      'Reactive fluorescent impacts',
      'MOA-friendly grid for load development',
    ],
    categories: ['splatter-targets'],
    image: IMG.sightGrid,
    images: [IMG.sightGrid],
    badge: 'Sight-In',
    inStock: true,
  },
  {
    id: 'si-0004',
    title: 'Splatter Silhouette 23"×35"',
    slug: 'splatter-silhouette-23x35',
    price: 29.99,
    description:
      'Full-size reactive silhouette for defensive and tactical practice. Center-mass hits flash on impact so you can track your shots through a string of fire.',
    details: [
      '23 x 35 inch silhouette',
      'Pack of 5 targets',
      'Scoring rings with reactive reveal',
      'Pistol, carbine, and rifle',
    ],
    categories: ['splatter-targets'],
    image: IMG.splatterSil,
    images: [IMG.splatterSil],
    inStock: true,
  },
  {
    id: 'si-0005',
    title: 'Rimfire Splatter Dots 3"',
    slug: 'rimfire-splatter-dots-3',
    price: 16.99,
    description:
      'A sheet of nine small reactive dots — perfect plinking fun for .22 and air rifles. Each hit pops with color so even tiny rounds are easy to call.',
    details: [
      'Nine 3 inch reactive dots per sheet',
      'Pack of 50 sheets',
      'Sized for rimfire and airgun',
      'Great for kids and new shooters (supervised)',
    ],
    categories: ['splatter-targets'],
    image: IMG.rimfireDots,
    images: [IMG.rimfireDots],
    inStock: true,
  },
  {
    id: 'si-0006',
    title: 'Splatter Sight-In Grid 12"',
    slug: 'splatter-sight-in-grid-12',
    price: 22.99,
    description:
      'A clean 12-inch sight-in grid with bold center bull and reactive impacts — the no-fuss way to confirm zero and measure groups at the range.',
    details: [
      '12 inch grid with 1 inch squares',
      'Pack of 10 targets',
      'Reactive center bull',
      'Numbered grid for precise adjustments',
    ],
    categories: ['splatter-targets'],
    image: IMG.sightGrid,
    images: [IMG.sightGrid],
    inStock: true,
  },

  // ── PAPER TARGETS ─────────────────────────────────────────
  {
    id: 'si-0101',
    title: 'Classic Bullseye Paper Target',
    slug: 'classic-bullseye-paper',
    price: 14.99,
    description:
      'The timeless black-and-white bullseye. Crisp scoring rings on bright stock for traditional marksmanship practice at any distance.',
    details: [
      '8 inch classic scoring bullseye',
      'Pack of 100 targets',
      'Bright, glare-free paper',
      'Pistol and rifle',
    ],
    categories: ['paper-targets'],
    image: IMG.paperBull,
    images: [IMG.paperBull],
    inStock: true,
  },
  {
    id: 'si-0102',
    title: 'B-27 Silhouette Target',
    slug: 'b27-silhouette',
    price: 34.99,
    description:
      'The standard qualification silhouette used on ranges everywhere. Clearly printed scoring zones for defensive drills and timed practice.',
    details: [
      'Full-size B-27 style silhouette',
      'Pack of 100 targets',
      'Numbered scoring rings',
      'Law-enforcement and self-defense practice',
    ],
    categories: ['paper-targets'],
    image: IMG.splatterSil,
    images: [IMG.splatterSil],
    inStock: true,
  },
  {
    id: 'si-0103',
    title: 'Slow-Fire Repair Center (100)',
    slug: 'slow-fire-repair-center',
    price: 17.99,
    description:
      'Pistol slow-fire repair centers for precision bullseye shooters. Paste them over a backer to keep shooting without changing the whole target.',
    details: [
      'Standard pistol repair center',
      'Pack of 100',
      'Pre-scored aiming black',
      'Bullseye league and practice',
    ],
    categories: ['paper-targets'],
    image: IMG.paperBull,
    images: [IMG.paperBull],
    inStock: true,
  },
  {
    id: 'si-0104',
    title: 'Splatter Zombie Fun Pack',
    slug: 'splatter-zombie-fun-pack',
    price: 18.99,
    description:
      'A lighthearted reactive novelty target for a fun day at the range. Bright impact bursts make every hit land with a little extra satisfaction.',
    details: [
      '12 x 18 inch novelty silhouette',
      'Pack of 20 targets',
      'Reactive impact reveal',
      'Just-for-fun plinking',
    ],
    categories: ['paper-targets', 'splatter-targets'],
    image: IMG.splatterSil,
    images: [IMG.splatterSil],
    inStock: true,
  },

  // ── STEEL TARGETS ─────────────────────────────────────────
  {
    id: 'si-0201',
    title: 'AR500 Steel Gong — 6"',
    slug: 'ar500-gong-6',
    price: 39.99,
    description:
      'Laser-cut AR500 hardened steel gong that rings on every hit and shrugs off thousands of rounds. The satisfying "ding" of instant feedback, downrange.',
    details: [
      '6 inch round, 3/8 inch AR500 steel',
      'Through-hardened to ~500 Brinell',
      'Rated for rifle up to 3,000 fps at distance',
      'Hanging hole pre-cut',
    ],
    categories: ['steel-targets'],
    image: IMG.steelGong,
    images: [IMG.steelGong],
    badge: 'AR500',
    inStock: true,
  },
  {
    id: 'si-0202',
    title: 'AR500 Steel Gong — 8"',
    slug: 'ar500-gong-8',
    price: 54.99,
    description:
      'The all-around favorite. An 8-inch AR500 gong big enough for confident hits at distance, tough enough to last for years of range trips.',
    details: [
      '8 inch round, 3/8 inch AR500 steel',
      'Through-hardened, edge-deburred',
      'Pistol and rifle (mind minimum distances)',
      'Hanging hardware compatible',
    ],
    categories: ['steel-targets'],
    image: IMG.steelGong,
    images: [IMG.steelGong],
    badge: 'Best Seller',
    inStock: true,
  },
  {
    id: 'si-0203',
    title: 'AR500 Steel Gong — 10"',
    slug: 'ar500-gong-10',
    price: 74.99,
    description:
      'A generous 10-inch AR500 plate for fast hits and long-range confirmation. Big, loud, and built to outlast everything else in your range bag.',
    details: [
      '10 inch round, 3/8 inch AR500 steel',
      'Through-hardened hardened plate',
      'Excellent for carbine and rifle drills',
      'Pairs with our hanging stand',
    ],
    categories: ['steel-targets'],
    image: IMG.steelGong,
    images: [IMG.steelGong],
    inStock: true,
  },
  {
    id: 'si-0204',
    title: 'AR500 Hostage / IPSC Plate',
    slug: 'ar500-ipsc-plate',
    price: 129.99,
    description:
      'Full-size AR500 practical-style silhouette for action shooting practice. Built for hard use in USPSA, IPSC, and 3-gun training.',
    details: [
      'Practical/IPSC silhouette profile',
      '3/8 inch AR500 steel',
      'Mounting tabs for T-post or stand',
      'Centerfire pistol and rifle',
    ],
    categories: ['steel-targets'],
    image: IMG.steelPopper,
    images: [IMG.steelPopper],
    inStock: true,
  },
  {
    id: 'si-0205',
    title: 'AR500 Pistol Popper',
    slug: 'ar500-pistol-popper',
    price: 89.99,
    description:
      'A self-standing AR500 popper that rocks back and resets after a center hit. Audible, visible, and ready for rapid-fire pistol practice.',
    details: [
      'Pepper-popper style profile',
      '3/8 inch AR500 steel head and post',
      'Self-resetting base',
      'Centerfire pistol',
    ],
    categories: ['steel-targets', 'reactive-targets'],
    image: IMG.steelPopper,
    images: [IMG.steelPopper],
    inStock: true,
  },

  // ── REACTIVE TARGETS ──────────────────────────────────────
  {
    id: 'si-0301',
    title: 'Dual-Paddle Steel Spinner',
    slug: 'dual-paddle-spinner',
    price: 44.99,
    description:
      'Two AR500 paddles that spin on a center axle when you connect. Endless rimfire and pistol fun with instant, no-reset feedback.',
    details: [
      'Two-paddle spinning design',
      'AR500 paddles, steel frame',
      'Rimfire and centerfire pistol',
      'Drives into the ground — no tools',
    ],
    categories: ['reactive-targets'],
    image: IMG.spinner,
    images: [IMG.spinner],
    badge: 'Reactive',
    inStock: true,
  },
  {
    id: 'si-0302',
    title: 'Auto-Reset Rimfire Spinner',
    slug: 'auto-reset-rimfire-spinner',
    price: 34.99,
    description:
      'A compact auto-resetting spinner sized for .22LR. Knock the paddle, watch it whirl, and keep shooting — perfect for plinking sessions.',
    details: [
      'Sized and rated for rimfire only',
      'Powder-coated steel',
      'Ground-stake mount',
      'Lightweight and portable',
    ],
    categories: ['reactive-targets'],
    image: IMG.spinner,
    images: [IMG.spinner],
    inStock: true,
  },
  {
    id: 'si-0303',
    title: 'Six-Paddle Dueling Tree',
    slug: 'six-paddle-dueling-tree',
    price: 199.99,
    description:
      'The classic head-to-head range game. Swing all six AR500 paddles to your opponent’s side to win — competitive, addictive steel shooting.',
    details: [
      'Six AR500 swinging paddles',
      'Heavy steel stand and pivot',
      'Centerfire pistol',
      'Folds for transport',
    ],
    categories: ['reactive-targets'],
    image: IMG.spinner,
    images: [IMG.spinner],
    inStock: true,
  },
  {
    id: 'si-0304',
    title: 'Knockdown Popper Set (3)',
    slug: 'knockdown-popper-set',
    price: 149.99,
    description:
      'A trio of knockdown poppers for stage drills and timed practice. Set them up, run the string, reset, repeat.',
    details: [
      'Set of three knockdown poppers',
      'AR500 faces on steel bases',
      'Manual reset',
      'Centerfire pistol and rifle',
    ],
    categories: ['reactive-targets'],
    image: IMG.steelPopper,
    images: [IMG.steelPopper],
    inStock: true,
  },

  // ── STANDS & FRAMES ───────────────────────────────────────
  {
    id: 'si-0401',
    title: 'Adjustable Target Stand',
    slug: 'adjustable-target-stand',
    price: 29.99,
    description:
      'A sturdy base that accepts standard furring strips so you can run paper and cardboard at any height. Flat-packs into the trunk in seconds.',
    details: [
      'Accepts 1x2 furring strips (not included)',
      'Heavy steel base, powder-coated',
      'Tool-free assembly',
      'Folds flat for transport',
    ],
    categories: ['target-stands'],
    image: IMG.stand,
    images: [IMG.stand],
    inStock: true,
  },
  {
    id: 'si-0402',
    title: 'USPSA Target Stand Kit',
    slug: 'uspsa-target-stand-kit',
    price: 39.99,
    description:
      'Everything you need to run cardboard practical targets at home or at the club. Base, uprights, and backer hardware in one kit.',
    details: [
      'Complete base + upright kit',
      'Fits standard practical cardboard',
      'Galvanized hardware',
      'Quick assembly',
    ],
    categories: ['target-stands'],
    image: IMG.stand,
    images: [IMG.stand],
    inStock: true,
  },
  {
    id: 'si-0403',
    title: 'Steel Hanging Target Stand',
    slug: 'steel-hanging-target-stand',
    price: 119.99,
    description:
      'A free-standing steel frame built to hang gongs and silhouettes. Pair it with any of our AR500 plates for a complete, portable steel setup.',
    details: [
      'Free-standing welded steel frame',
      'Hangs gongs up to 12 inches',
      'Includes chain and hooks',
      'Breaks down for transport',
    ],
    categories: ['target-stands', 'steel-targets'],
    image: IMG.stand,
    images: [IMG.stand],
    inStock: true,
  },

  // ── ACCESSORIES ───────────────────────────────────────────
  {
    id: 'si-0501',
    title: 'Target Pasters 7/8" (1,000)',
    slug: 'target-pasters-1000',
    price: 7.99,
    description:
      'Cover hits and keep shooting. A thousand bright pasters that stick fast and let you re-run the same target all day.',
    details: [
      '7/8 inch square pasters',
      'Roll of 1,000',
      'High-tack adhesive',
      'Black and bright color options',
    ],
    categories: ['accessories'],
    image: IMG.accessories,
    images: [IMG.accessories],
    inStock: true,
  },
  {
    id: 'si-0502',
    title: 'Heavy-Duty Target Staples (5,000)',
    slug: 'target-staples-5000',
    price: 12.99,
    description:
      'Galvanized staples that bite into furring strips and stay put in the wind. A bulk box that lasts season after season.',
    details: [
      'Galvanized heavy-duty staples',
      'Box of 5,000',
      'Fits standard hand and hammer tackers',
      'Rust-resistant',
    ],
    categories: ['accessories'],
    image: IMG.accessories,
    images: [IMG.accessories],
    inStock: true,
  },
  {
    id: 'si-0503',
    title: 'Stand Hooks & Chain Kit',
    slug: 'stand-hooks-chain-kit',
    price: 19.99,
    description:
      'Replacement hanging hardware for steel targets — zinc-plated chain and quick-clip hooks to rig gongs to any stand or T-post.',
    details: [
      'Zinc-plated chain and clips',
      'Hangs plates up to 12 inches',
      'Quick-swap hooks',
      'Weather-resistant',
    ],
    categories: ['accessories'],
    image: IMG.accessories,
    images: [IMG.accessories],
    inStock: true,
  },
  {
    id: 'si-0504',
    title: 'Carbide Splatter Marker Pen',
    slug: 'carbide-splatter-marker',
    price: 6.99,
    description:
      'Mark groups, score targets, and label your zero — a weather-resistant range marker that writes on paper, steel, and cardboard.',
    details: [
      'Writes on paper, steel, and cardboard',
      'Weatherproof ink',
      'Fine tip for scoring',
      'Clips to your range bag',
    ],
    categories: ['accessories'],
    image: IMG.accessories,
    images: [IMG.accessories],
    inStock: true,
  },
]
