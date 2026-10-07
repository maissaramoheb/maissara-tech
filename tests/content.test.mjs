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
const { projects, getProject } = load("projects", { "./site": siteData });
test("four canonical, unique work routes resolve; unknown routes do not", () => {
  assert.equal(projects.length, 4);
  assert.equal(new Set(projects.map((p) => p.slug)).size, 4);
  for (const project of projects)
    assert.equal(getProject(project.slug), project);
  assert.equal(getProject("unknown"), undefined);
});
test("case studies preserve source links, media provenance and boundaries", () => {
  for (const p of projects) {
    assert.match(p.sourceCommit, /^[a-f0-9]{40}$/);
    assert.ok(p.current.length && p.boundaries.length && p.workflow.length);
    assert.ok(fs.existsSync(`public${p.image}`));
    assert.ok(p.imageCaption && p.imageAlt);
    assert.match(p.repository, /^https:\/\/github.com\/maissaramoheb\//);
  }
});
test("UNPOL methodology has seven stages, export stays separate, and disclaimer is explicit", () => {
  const p = getProject("unpol-cbd");
  assert.equal(p.workflow.length, 7);
  assert.ok(!p.workflow.some((s) => s.toLowerCase().includes("export")));
  assert.equal(
    p.qualifier,
    "UNOFFICIAL / EDUCATIONAL & DECISION-SUPPORT PROTOTYPE",
  );
  assert.ok(
    p.boundaries.some((s) =>
      s.includes("does not represent the United Nations"),
    ),
  );
});
test("no fabricated email; YCPS is labeled as a visualization; safety gate remains non-compensable", () => {
  assert.equal(siteData.site.contactEmail, undefined);
  assert.match(
    getProject("ycps-toolkit-lab").imageCaption,
    /NOT AN INTERFACE SCREENSHOT/,
  );
  assert.ok(
    getProject("trifecta-performance-lab").current.some((s) =>
      s.includes("Critical Safety Failure is non-compensable"),
    ),
  );
});
