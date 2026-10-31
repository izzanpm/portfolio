import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { en } from "../src/i18n/en.ts";
import { id } from "../src/i18n/id.ts";
import { cvUrl } from "../src/data/links.ts";
import { projects } from "../src/data/projects.ts";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const main = read("src/main.tsx");
const server = existsSync(new URL("../src/entry-server.tsx", import.meta.url)) ? read("src/entry-server.tsx") : "";
const packageJson = read("package.json");
const navbar = read("src/components/Navbar.tsx");
const caseStudy = read("src/components/CaseStudy.tsx");
const evidence = read("src/components/EvidencePanel.tsx");
const archive = read("src/components/ProjectArchive.tsx");
const webCaseStudy = read("src/components/WebCaseStudy.tsx");
const webBuildPanel = read("src/components/WebBuildPanel.tsx");
const html = read("index.html");
const plan = read("docs/superpowers/plans/2026-08-06-portfolio-redesign.md");

assert.match(main, /hydrateRoot/);
assert.match(server, /renderToString/);
assert.match(packageJson, /prerender\.mjs/);
assert.match(navbar, /aria-label=\{t\("nav\.primary"\)\}/);
assert.match(navbar, /const \[hydrated, setHydrated\] = useState\(false\)/);
assert.match(navbar, /useEffect\(\(\) => \{\s*setHydrated\(true\);\s*\}, \[\]\)/);
assert.match(navbar, /<details className="md:hidden">/);
assert.match(navbar, /<summary className="[^"]*min-h-11[^"]*min-w-11[^"]*">/);
assert.match(navbar, /<Menu size=\{22\} aria-hidden="true"/);
assert.match(navbar, /<span className="sr-only">\{t\("nav\.menu"\)\}<\/span>/);
assert.match(navbar, /closest\("details"\)\?\.removeAttribute\("open"\)/);
assert.doesNotMatch(navbar, /mobileOpen|setMobileOpen|\bX\b/);
assert.equal(en["nav.localeSwitch"], "Use Indonesian");
assert.equal(id["nav.localeSwitch"], "Gunakan bahasa Inggris");
assert.equal(cvUrl, "https://drive.google.com/file/d/1F2Bf3neg_9q7--dASm3U7g_O6IyXSQ3_/view?usp=sharing");
assert.equal(en["case.label"], "Case");
assert.equal(id["case.label"], "Studi kasus");

assert.deepEqual(Object.keys(en).sort(), Object.keys(id).sort());
for (const project of projects) {
  assert.ok(en[`category.${project.category}`]);
  assert.ok(id[`category.${project.category}`]);
}
assert.match(caseStudy, /t\("case\.label"\)/);
assert.match(caseStudy, /inline-flex min-h-11 items-center/);
assert.match(evidence, /t\(`category\.\$\{project\.category\}`\)/);
assert.match(archive, /t\(`category\.\$\{project\.category\}`\)/);
assert.match(archive, /<h4/);
assert.match(evidence, /aspect-video/);
assert.match(evidence, /object-contain/);
assert.match(evidence, /loading=\{compact \? "eager" : "lazy"\}/);
assert.match(webCaseStudy, /web\.problem/);
assert.match(webCaseStudy, /web\.demoPending/);
assert.match(webBuildPanel, /web\.previewPending/);
assert.doesNotMatch(html, /Archivo:wght@[^"\n]*500/);
assert.doesNotMatch(html, /Azeret\+Mono:wght@[^"\n]*500/);
assert.equal(projects.length, 8);
assert.doesNotMatch(plan, /Archivo:wght@[^"\n]*500|Azeret\+Mono:wght@[^"\n]*500|object-cover|aria-label="Primary navigation"|Gunakan Bahasa Indonesia|Use English|>Case \{|<h3 className="font-semibold text-ink"|className="text-signal underline-offset-4/);
for (const expected of ["nav.primary", "nav.localeSwitch", "case.label", "category.classification", "category.eda", "category.deployment", "category.normalization", "hydrateRoot", "renderToString", "prerender.mjs", "object-contain"]) {
  assert.ok(plan.includes(expected), `implementation plan must include ${expected}`);
}
assert.match(plan, /<details className="md:hidden">/);
assert.match(plan, /<summary className="[^"]*min-h-11[^"]*min-w-11/);
assert.doesNotMatch(plan, /mobileOpen|setMobileOpen|\bX\b/);

const distPath = new URL("../dist/index.html", import.meta.url);
assert.ok(existsSync(distPath), "dist/index.html must exist; run npm run build first");
const dist = readFileSync(distPath, "utf8");
const root = dist.match(/<div id="root">([\s\S]*)<\/div>\s*<\/body>/);
assert.ok(root?.[1].trim(), "the emitted #root must contain readable HTML");
assert.match(root[1], /Turning analysis into useful digital products\./);
assert.match(root[1], /BinusSmartLocker/);
assert.match(root[1], /All work/);
assert.match(root[1], /Data/);
assert.match(root[1], /Web/);
assert.match(root[1], /Live demo pending/);
assert.match(root[1], /href="https:\/\/github\.com\/izzanpm\/binus-smart-locker\.git"/);
assert.match(root[1], /Web deployment and database setup\./);
assert.match(root[1], /EC2 application hosting/);
assert.match(root[1], /Repository link pending/);
const mobileDetails = root[1].match(/<details class="md:hidden">[\s\S]*?<\/details>/)?.[0];
assert.ok(mobileDetails, "the emitted root must include native mobile navigation details");
assert.match(mobileDetails, /<summary class="[^"]*min-h-11[^"]*min-w-11/);
assert.doesNotMatch(mobileDetails, /<details[^>]*\sopen(?:=|>)/);
for (const id of ["work", "profile", "contact"]) assert.ok(mobileDetails.includes(`href="#${id}"`));
assert.ok(mobileDetails.includes(`href="${cvUrl}"`));
assert.doesNotMatch(mobileDetails, /<button/);
assert.doesNotMatch(dist, /<script(?![^>]*\bsrc=)[^>]*>[\s\S]*?<\/script>/);
assert.equal(dist.match(/49a82433/g)?.length, 1);
assert.equal(existsSync(new URL("../.prerender", import.meta.url)), false);

console.log(`review checks passed: translations=${Object.keys(en).length}/${Object.keys(id).length}, projects=${projects.length}, rootChars=${root[1].length}, seed=1`);
