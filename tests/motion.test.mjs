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
