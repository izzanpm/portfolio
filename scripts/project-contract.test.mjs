import assert from "node:assert/strict";
import { filterProjects, featuredProjects, getDisplayProjects, projects } from "../src/data/projects.ts";
import { en } from "../src/i18n/en.ts";
import { id } from "../src/i18n/id.ts";

const webProjects = filterProjects(projects, "web");
const dataProjects = filterProjects(projects, "data");

assert.deepEqual(webProjects.map((project) => project.id), ["binus-smart-locker", "aws-deployment"]);
assert.equal(webProjects[0].type, "web");
assert.equal(webProjects[0].origin, "independent");
assert.equal(webProjects[0].web?.status, "shipped");
assert.equal(webProjects[0].web?.repository, "https://github.com/izzanpm/binus-smart-locker.git");
assert.ok(webProjects[0].web?.liveDemo === undefined);
assert.equal(dataProjects.length, 6);
assert.equal(featuredProjects[0].id, "binus-smart-locker");
const featuredRanks = featuredProjects.map((project) => project.featured);
assert.deepEqual(featuredRanks, [1, 2, 3]);
assert.equal(new Set(featuredRanks).size, featuredRanks.length);
assert.ok(featuredRanks.every((rank) => rank > 0));
assert.deepEqual(getDisplayProjects(featuredProjects, "data").map(({ project, displayIndex }) => [project.id, displayIndex]), [
  ["smartphone-price-prediction", 1],
  ["breast-cancer-prediction", 2],
]);
assert.deepEqual(getDisplayProjects(featuredProjects, "web").map(({ project, displayIndex }) => [project.id, displayIndex]), [["binus-smart-locker", 1]]);
assert.equal(filterProjects(projects, "all").length, projects.length);

for (const project of projects) {
  assert.ok(en[`projects.${project.id}.summary`]);
  assert.ok(id[`projects.${project.id}.summary`]);
  if (project.type === "web") {
    for (const key of [project.web.problemKey, project.web.roleKey, project.web.featuresKey, ...project.web.surfaceKeys]) {
      assert.ok(en[key], `missing English translation: ${key}`);
      assert.ok(id[key], `missing Indonesian translation: ${key}`);
    }
  }
}

console.log(`project contract passed: web=${webProjects.length}, data=${dataProjects.length}`);
