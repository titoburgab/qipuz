import fs from "node:fs";
import path from "node:path";
import puppeteer from "/Users/titoburga/Documents/Cesar Website/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js";

const CHROME =
  "/Users/titoburga/.cache/puppeteer/chrome/mac_arm-150.0.7871.24/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing";

const url = process.argv[2];
const label = process.argv[3];
const width = Number(process.argv[4]) || 1440;
const height = Number(process.argv[5]) || 900;
const fullPage = process.argv[6] !== "viewport";

if (!url) {
  console.error("Usage: node screenshot.mjs <url> [label] [width] [height] [viewport|full]");
  process.exit(1);
}

const dir = path.join(process.cwd(), "temporary screenshots");
fs.mkdirSync(dir, { recursive: true });

const existing = fs
  .readdirSync(dir)
  .map((f) => f.match(/^screenshot-(\d+)/))
  .filter(Boolean)
  .map((m) => Number(m[1]));
const next = existing.length ? Math.max(...existing) + 1 : 1;

const filename = label ? `screenshot-${next}-${label}.png` : `screenshot-${next}.png`;
const outPath = path.join(dir, filename);

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  defaultViewport: { width, height, deviceScaleFactor: 2 },
});
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 300));

if (fullPage) {
  // Scroll through the page first so scroll-triggered reveals (IntersectionObserver) fire
  await page.evaluate(async () => {
    const step = window.innerHeight;
    const total = document.body.scrollHeight;
    for (let y = 0; y < total; y += step) {
      window.scrollTo({ top: y, left: 0, behavior: "instant" });
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  });
  await new Promise((r) => setTimeout(r, 300));
}

await page.screenshot({ path: outPath, fullPage });
await browser.close();

console.log(`Saved ${outPath}`);
