import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { en } from "../src/i18n/en.ts";
import { id } from "../src/i18n/id.ts";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const projects = read("src/components/Projects.tsx");
const archive = read("src/components/ProjectArchive.tsx");
const hero = read("src/components/Hero.tsx");
const webCaseStudy = "src/components/WebCaseStudy.tsx";
const webBuildPanel = "src/components/WebBuildPanel.tsx";

assert.ok(existsSync(new URL(`../${webCaseStudy}`, import.meta.url)));
assert.ok(existsSync(new URL(`../${webBuildPanel}`, import.meta.url)));
assert.match(projects, /filterProjects/);
assert.match(projects, /WebCaseStudy/);
assert.match(archive, /startIndex/);
assert.match(archive, /project\.type === "web"/);
assert.match(archive, /web\.role/);
assert.match(archive, /web\.features/);
assert.match(archive, /web\.sourcePending/);
assert.match(hero, /WebBuildPanel/);

for (const key of [
  "work.filterLabel",
  "work.filterAll",
  "work.filterData",
  "work.filterWeb",
  "work.empty",
  "web.problem",
  "web.role",
  "web.features",
  "web.status",
  "web.previewPending",
  "web.demo",
  "web.source",
]) {
  assert.ok(en[key], `missing English translation: ${key}`);
  assert.ok(id[key], `missing Indonesian translation: ${key}`);
}

console.log("web project UI contract passed");
