// scripts/record-screencasts.mjs
// Запуск:
//   npm i -D playwright
//   npx playwright install chromium
//   node scripts/record-screencasts.mjs
// (нужен установленный ffmpeg в системе)

import { chromium } from 'playwright';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const OUT_DIR = path.resolve('public/media');
const TMP_VIDEO_DIR = path.resolve('.tmp-videos');
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.mkdirSync(TMP_VIDEO_DIR, { recursive: true });

async function recordFlow({ url, outName, steps }) {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    recordVideo: { dir: TMP_VIDEO_DIR, size: { width: 1280, height: 800 } },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(700);

  await steps(page);

  const videoPath = await page.video().path();
  await context.close();
  await browser.close();

  const webpOut = path.join(OUT_DIR, `${outName}.webp`);
  const gifOut = path.join(OUT_DIR, `${outName}.gif`);

  // Анимированный WebP (идеально для веба: ~250-450 KB вместо мегабайтных GIF)
  execSync(
    `ffmpeg -y -i "${videoPath}" -vf "fps=20,scale=960:-1:flags=lanczos" -loop 0 -compression_level 6 -q:v 75 "${webpOut}"`,
    { stdio: 'inherit' }
  );

  // Классический GIF на всякий случай
  execSync(
    `ffmpeg -y -i "${videoPath}" -vf "fps=15,scale=840:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 "${gifOut}"`,
    { stdio: 'inherit' }
  );

  console.log(`✔ Сохранено: ${webpOut} и ${gifOut}`);
}

await recordFlow({
  url: 'https://medhub.sk/sk',
  outName: 'medhub-search-demo',
  steps: async (page) => {
    const input = page.locator('input[type="search"], input[placeholder*="lekár"], input').first();
    await input.click();
    await input.type('Dermatológ Bratislava', { delay: 75 });
    await page.waitForTimeout(900);
    await page.mouse.wheel(0, 520);
    await page.waitForTimeout(1400);
    await page.mouse.wheel(0, 520);
    await page.waitForTimeout(1200);
  },
});

fs.rmSync(TMP_VIDEO_DIR, { recursive: true, force: true });