import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

const exports = {};
vm.runInNewContext(ts.transpileModule(fs.readFileSync("src/lib/motion.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText, { exports });
const { counterValue } = exports;

test("service ordinal stays at its documented final value throughout the counter", () => {
  const service = { targetNumber: 18, suffix: "TH", padZero: false };
  for (let p = 0; p <= 1; p += .01) assert.equal(counterValue(service, p), "18");
});
test("counters are bounded, monotonic, padded and settle exactly", () => {
  for (const targetNumber of [3, 4, 5]) {
    const metric = { targetNumber, padZero: true };
    let previous = 0;
    for (let p = 0; p <= 1.01; p += .01) {
      const value = counterValue(metric, p);
      assert.equal(value.length, 2);
      assert.ok(+value >= previous && +value <= targetNumber);
      previous = +value;
    }
    assert.equal(counterValue(metric, -1), "00");
    for (const p of [1, 2, NaN, Infinity]) assert.equal(+counterValue(metric, p), targetNumber);
  }
});


test("shared reveals settle visibly without large movement or a portrait camera effect", () => {
  const { revealFrames, motion } = exports;
  for (const kind of ["text", "media", "artwork"]) {
    const frames = revealFrames(kind);
    assert.equal(frames.at(-1).opacity, 1);
    assert.ok(frames[0].opacity >= .75);
  }
  assert.equal(revealFrames("artwork")[0].transform, undefined);
  assert.equal(revealFrames("media").at(-1).transform, "scale(1)");
  assert.ok(motion.distance <= 16);
  assert.ok(motion.reveal >= 850 && motion.reveal <= 1200);
  assert.ok(motion.editorial >= 1100 && motion.editorial <= 1500);
  assert.ok(motion.counter >= 2400 && motion.counter <= 2800);
});
