/** Full-page capture must activate lazy media before asking Chrome for pixels.
 * Errors deliberately propagate: a screenshot is not ready when decode fails. */
export async function readyImage(image) {
  await image.scrollIntoViewIfNeeded();
  await image.evaluate(async element => {
    await element.decode();
    if (!element.complete || !element.naturalWidth) throw new Error("Image has no decoded pixels");
    await Promise.all(element.getAnimations().map(animation => animation.finished.catch(() => {})));
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
}

export async function preparePage(page) {
  await page.evaluate(() => document.fonts.ready);
  for (const image of await page.locator("img").all()) await readyImage(image);
  await page.evaluate(() => scrollTo(0, 0));
  // GSAP scrub smoothing continues after native scroll reaches the top.
  if (await page.locator(".pin-spacer").count()) {
    await page.waitForFunction(() => {
      const hero = document.querySelector(".v2-scene-hero");
      return !hero || +getComputedStyle(hero).opacity > 0.99;
    });
  }
}
