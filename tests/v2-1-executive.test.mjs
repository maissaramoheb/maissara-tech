import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

function load(name, dependencies = {}) {
  const source = fs.readFileSync(`src/data/${name}.ts`, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const exports = {};
  vm.runInNewContext(outputText, {
    exports,
    require: (path) => {
      assert.ok(dependencies[path], `Unexpected dependency ${path}`);
      return dependencies[path];
    },
  });
  return exports;
}

const siteData = load("site");

test("V2.1 operational metrics: exactly four verified metrics with defensible provenance", () => {
  const { operationalMetrics } = siteData;
  assert.ok(Array.isArray(operationalMetrics));
  assert.equal(operationalMetrics.length, 4);

  const [m1, m2, m3, m4] = operationalMetrics;

  // Metric 01: Service
  assert.equal(m1.id, "service");
  assert.equal(m1.index, "01");
  assert.equal(m1.targetNumber, 18);
  assert.equal(m1.suffix, "TH");
  assert.equal(m1.valueDisplay, "18TH");
  assert.equal(m1.label, "YEAR OF PROFESSIONAL SERVICE");
  assert.equal(m1.supporting, "Policing · Security · Strategic Leadership");
  assert.match(m1.provenance, /July 2009/);

  // Metric 02: UN Engagement
  assert.equal(m2.id, "un-engagement");
  assert.equal(m2.index, "02");
  assert.equal(m2.targetNumber, 5);
  assert.equal(m2.suffix, "+");
  assert.equal(m2.valueDisplay, "5+");
  assert.equal(m2.label, "YEARS OF UN ENGAGEMENT");
  assert.equal(m2.supporting, "Peace Operations · Training · Capacity Development");
  assert.match(m2.provenance, /2021–2026/);

  // Metric 03: Digital Systems
  assert.equal(m3.id, "systems");
  assert.equal(m3.index, "03");
  assert.equal(m3.targetNumber, 4);
  assert.equal(m3.padZero, true);
  assert.equal(m3.valueDisplay, "04");
  assert.equal(m3.label, "FEATURED DIGITAL SYSTEMS");
  assert.equal(m3.supporting, "Decision Support · Learning · Applied Technology");

  // Metric 04: Research Themes
  assert.equal(m4.id, "research");
  assert.equal(m4.index, "04");
  assert.equal(m4.targetNumber, 3);
  assert.equal(m4.padZero, true);
  assert.equal(m4.valueDisplay, "03");
  assert.equal(m4.label, "RESEARCH FOCUS AREAS");
  assert.equal(m4.supporting, "Human–AI Decisions · Peace Operations · Human Performance");
});

test("V2.1 executive credentials: four credentials with no unverified UN claims", () => {
  const { executiveCredentials } = siteData;
  assert.ok(Array.isArray(executiveCredentials));
  assert.equal(executiveCredentials.length, 4);

  const [c1, c2, c3, c4] = executiveCredentials;

  assert.equal(c1.index, "01");
  assert.equal(c1.title, "LAW & POLICE SCIENCES");

  assert.equal(c2.index, "02");
  assert.equal(c2.title, "MBA — AI IN BUSINESS ORGANIZATIONS");

  assert.equal(c3.index, "03");
  assert.equal(c3.title, "UN PEACE OPERATIONS");

  assert.equal(c4.index, "04");
  assert.equal(c4.title, "CERTIFIED TRAINER");
  // Explicit gate: do NOT say "UN-CERTIFIED TRAINER"
  assert.notEqual(c4.title, "UN-CERTIFIED TRAINER");
  assert.ok(!c4.title.includes("UN-CERTIFIED"));
  assert.match(c4.descriptor, /Training of Trainers/);
  assert.match(c4.descriptor, /Training Design/);
  assert.match(c4.descriptor, /Capacity Development/);
});

test("V2.1 architecture: OperationalMetrics is properly placed and accessible", () => {
  const pageSource = fs.readFileSync("src/app/page.tsx", "utf8");
  const metricsSource = fs.readFileSync("src/components/v2/OperationalMetrics.tsx", "utf8");
  const editorialSource = fs.readFileSync("src/components/v2/editorial.tsx", "utf8");
  const cssSource = fs.readFileSync("src/app/v2-full.css", "utf8");

  // Placement check: OperationalMetrics inside HomeContinuation, before selected-systems
  assert.ok(pageSource.includes("<OperationalMetrics />"));
  const metricsIndex = pageSource.indexOf("<OperationalMetrics />");
  const workIndex = pageSource.indexOf('id="work"');
  assert.ok(metricsIndex > 0 && workIndex > metricsIndex);

  // Accessibility checks in component source
  assert.ok(metricsSource.includes("aria-label={metric.ariaLabel}"));
  assert.ok(metricsSource.includes("prefers-reduced-motion"));
  assert.ok(metricsSource.includes("IntersectionObserver"));

  // Tabular numerals in CSS
  assert.ok(cssSource.includes("tabular-nums"));
  assert.ok(cssSource.includes(".credentials-ledger"));
  assert.ok(cssSource.includes(".metric-cell"));

  // Credentials ledger in editorial source
  assert.ok(editorialSource.includes("credentials-ledger"));
  assert.ok(editorialSource.includes("executiveCredentials"));
});
