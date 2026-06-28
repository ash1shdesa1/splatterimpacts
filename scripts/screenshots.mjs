// Capture phone-style screenshots of the running site for sharing.
// Usage: node scripts/screenshots.mjs   (server must be running on :4317)
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const BASE = process.env.SCREENSHOT_BASE || 'http://localhost:4317'
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'screenshots')
mkdirSync(OUT, { recursive: true })

const SHOTS = [
  { name: '01-home',            url: '/' },
  { name: '02-shop',            url: '/shop' },
  { name: '03-shop-steel',      url: '/shop?category=steel-targets' },
  { name: '04-product-splatter', url: '/shop/splatter-burst-8-bullseye' },
  { name: '05-product-steel',   url: '/shop/ar500-gong-8' },
  { name: '06-about',           url: '/about' },
  { name: '07-sizing',          url: '/sizing' },
  { name: '08-faq',             url: '/faq' },
  { name: '09-care',            url: '/care' },
  { name: '10-contact',         url: '/contact' },
]

const browser = await chromium.launch()
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
})
const page = await context.newPage()

for (const shot of SHOTS) {
  await page.goto(`${BASE}${shot.url}`, { waitUntil: 'networkidle', timeout: 30000 })
  await page.waitForTimeout(800) // let fonts/animations settle
  const file = join(OUT, `${shot.name}.png`)
  await page.screenshot({ path: file })
  console.log(`saved ${file}`)
}

await browser.close()
console.log('done')
