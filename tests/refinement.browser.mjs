/** Run with PLAYWRIGHT_MODULE pointing to an existing Playwright tools installation.
 * No application dependency or production browser package is required. */
import { createRequire } from "node:module";
import assert from "node:assert/strict";
import fs from "node:fs";
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const base = process.env.BASE_URL || "http://127.0.0.1:3234";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [];
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(base);
  await page.waitForTimeout(700);
  assert.equal(await page.locator(".pin-spacer").count(), 1);
  // Scroll by real wheel input: large wheel steps and small trackpad-like deltas.
  for (let i = 0; i < 8; i++) await page.mouse.wheel(0, 120);
  await page.waitForTimeout(200);
  const wheelY = await page.evaluate(() => scrollY);
  assert.ok(wheelY > 0);
  for (let i = 0; i < 12; i++) await page.mouse.wheel(0, 9);
  await page.waitForTimeout(200);
  assert.ok(await page.evaluate(() => scrollY) > wheelY);
  await page.keyboard.press("PageDown");
  await page.waitForTimeout(200);
  const runway = await page.locator(".pin-spacer").evaluate(e => e.getBoundingClientRect().height - innerHeight);
  await page.evaluate(distance => scrollTo(0, 78 + .687 * distance), runway);
  await page.waitForTimeout(1800);
  const domains = await page.locator(".v2-domain-item").evaluateAll(elements => elements.map(e => ({ opacity: +getComputedStyle(e).opacity, top: e.getBoundingClientRect().top, bottom: e.getBoundingClientRect().bottom, text: e.textContent })));
  assert.equal(domains.length, 5);
  domains.forEach((e, i) => { assert.ok(e.opacity > .95); if (i) assert.ok(e.top >= domains[i - 1].bottom - 1); });
  assert.ok(domains.some(e => e.text.startsWith("AI &")));
  await page.evaluate(distance => scrollTo(0, 78 + .85 * distance), runway);
  await page.waitForTimeout(1800);
  const scale = await page.locator(".v2-fls-image").evaluate(e => new DOMMatrixReadOnly(getComputedStyle(e).transform).a);
  assert.ok(scale >= 1 && scale <= 1.081);
  await page.evaluate(distance => scrollTo(0, 78 + distance + 120), runway);
  await page.waitForTimeout(1600);
  assert.ok(await page.locator(".v2-cinematic-stage").evaluate(e => e.getBoundingClientRect().bottom) < page.viewportSize().height);
  if (process.env.EVIDENCE_PATH) await page.screenshot({ path: process.env.EVIDENCE_PATH.replace("motion-regression.json", "after/fls-handoff.png") });
  results.push("wheel, small deltas, keyboard, five readable domains, restrained FLS focus and pin release");
  await page.locator(".v2-fls-final-statement .button-primary").click();
  await page.waitForURL("**/work/field-learning-studio");
  assert.equal(await page.locator(".pin-spacer").count(), 0);
  await page.getByRole("link", { name: "Maissara Selim, home", exact: true }).click();
  await page.waitForURL(base + "/");
  await page.waitForTimeout(700);
  assert.equal(await page.locator(".pin-spacer").count(), 1);
  results.push("client-side case-study navigation cleans the pin; returning home creates one pin");

  await page.goto(base + "/work");
  await page.emulateMedia({ reducedMotion: "reduce" });
  const media = await page.locator(".project-media-clip").evaluateAll(elements => elements.map(e => ({ width: e.getBoundingClientRect().width, height: e.getBoundingClientRect().height, fit: getComputedStyle(e.querySelector("img")).objectFit })));
  assert.equal(media.length, 4);
  media.forEach(e => { assert.ok(Math.abs(e.width / e.height - 1.6) < .01); assert.equal(e.fit, "contain"); assert.ok(Math.abs(e.width - media[0].width) < 2); });
  results.push("four equal 16:10 app canvases, contain without source aspect distortion");

  await page.goto(base + "/about");
  await page.locator(".editorial-portrait").scrollIntoViewIfNeeded();
  await page.locator(".editorial-portrait img").evaluate(e => e.decode());
  assert.match(await page.locator(".editorial-portrait img").getAttribute("alt"), /derived from his supplied photograph/);
  assert.equal(await page.locator(".pin-spacer").count(), 0);
  assert.equal(await page.locator('img[src*="DSC_1762"]').count(), 0);
  results.push("qualified owner-derived portrait, no raw source photo, no pin on About");

  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto(base);
  await page.waitForTimeout(700);
  await page.evaluate(() => scrollTo(0, document.querySelector("#experience-in-numbers").getBoundingClientRect().top + scrollY - innerHeight + 70));
  await page.waitForTimeout(2700);
  assert.deepEqual(await page.locator(".metric-value").allTextContents(), ["18", "0", "00", "00"]);
  await page.evaluate(() => scrollTo(0, document.querySelector(".metrics-grid").getBoundingClientRect().top + scrollY - innerHeight + 180));
  await page.waitForTimeout(250);
  const during = await page.locator(".metric-value").allTextContents();
  assert.equal(during[0], "18"); assert.ok(+during[1] > 0 && +during[1] < 5);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForTimeout(150);
  assert.deepEqual(await page.locator(".metric-value").allTextContents(), ["18", "5", "04", "03"]);
  assert.equal(await page.locator(".pin-spacer").count(), 0);
  results.push("visible counter gate, stable ordinal, live reduced-motion settlement and pin cleanup");
  await context.close();

  const touchContext = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const touch = await touchContext.newPage(); await touch.goto(base); await touch.waitForTimeout(400);
  const cdp = await touchContext.newCDPSession(touch);
  await cdp.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x: 190, y: 700 }] });
  for (let y = 680; y > 180; y -= 35) { await cdp.send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [{ x: 190, y }] }); await touch.waitForTimeout(18); }
  await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
  await touch.waitForTimeout(300);
  assert.ok(await touch.evaluate(() => scrollY) > 0);
  assert.equal(await touch.locator(".pin-spacer").count(), 0);
  const menu = touch.locator(".menu-toggle"); await menu.click(); await touch.keyboard.press("Escape"); assert.equal(await menu.getAttribute("aria-expanded"), "false");
  results.push("emulated touch swipe, native mobile scroll, no desktop pin, menu Escape");
  await touchContext.close();
  if (process.env.EVIDENCE_PATH) fs.writeFileSync(process.env.EVIDENCE_PATH, JSON.stringify({ passed: results }, null, 2));
  console.log(results);
} finally { await browser.close(); }
