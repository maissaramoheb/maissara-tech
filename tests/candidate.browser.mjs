import { createRequire } from "node:module";
import assert from "node:assert/strict";
import fs from "node:fs";
import { preparePage, readyImage } from "./capture-readiness.mjs";
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const base = process.env.BASE_URL || "http://127.0.0.1:3234";
const browser = await chromium.launch({ channel: "chrome" });
const results = [];
try {
  for (const width of [1440, 390]) for (const reducedMotion of ["no-preference", "reduce"]) {
    const context = await browser.newContext({ viewport: { width, height: width === 390 ? 844 : 900 }, reducedMotion });
    const page = await context.newPage();
    await context.route("**/_next/image?**", async route => { await new Promise(resolve => setTimeout(resolve, 700)); await route.continue(); });
    await page.goto(base + "/about");
    await preparePage(page);
    const academic = page.locator(".academic-milestone");
    assert.equal(await academic.count(), 1);
    assert.match(await academic.textContent(), /Master of Business Administration/);
    assert.match(await academic.textContent(), /AI in Business Organizations/);
    assert.match(await academic.textContent(), /2026/);
    assert.doesNotMatch(await academic.textContent(), /DBA|distinction|university|earned.*award/i);
    const art = academic.locator("img");
    await readyImage(art);
    const geometry = await academic.evaluate(element => {
      const image = element.querySelector("figure").getBoundingClientRect();
      const copy = element.querySelector(".academic-copy").getBoundingClientRect();
      return { image: { left: image.left, right: image.right, top: image.top, bottom: image.bottom }, copy: { left: copy.left, top: copy.top } };
    });
    if (width > 768) assert.ok(geometry.copy.left > geometry.image.right);
    else assert.ok(geometry.copy.top >= geometry.image.bottom);
    const state = await art.evaluate(element => ({ complete: element.complete, width: element.naturalWidth, fit: getComputedStyle(element).objectFit, opacity: +getComputedStyle(element).opacity, transform: getComputedStyle(element).transform, loading: element.loading }));
    assert.ok(state.complete && state.width > 0 && state.opacity === 1);
    assert.equal(state.fit, "contain"); assert.equal(state.transform, "none"); assert.equal(state.loading, "lazy");
    // Reveal API failure must leave the SSR image visible rather than in a hidden state.
    await page.addInitScript(() => { Element.prototype.animate = () => { throw new Error("Test unavailable animation API"); }; });
    await page.goto(base + "/about"); await readyImage(page.locator(".academic-artwork img"));
    assert.equal(await page.locator(".academic-artwork img").evaluate(element => +getComputedStyle(element).opacity), 1);
    await context.close();
    results.push({ width, reducedMotion, academicLayout: "PASS", decode: "PASS", animationFailureVisibility: "PASS" });
  }
  // Capture preparation must not accept a broken asset as screenshot-ready.
  const page = await browser.newPage();
  await page.route("**/broken-image", route => route.fulfill({ status: 404, body: "missing" }));
  await page.goto(base + "/contact");
  await page.evaluate(() => { const image = new Image(); image.src = "/broken-image"; document.body.append(image); });
  await assert.rejects(readyImage(page.locator('img[src="/broken-image"]')));
  results.push({ negativeBrokenImage: "capture rejects decode failure" });
  console.log(results);
  if (process.env.EVIDENCE_PATH) fs.writeFileSync(process.env.EVIDENCE_PATH, JSON.stringify(results, null, 2));
} finally { await browser.close(); }
