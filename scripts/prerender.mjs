import { readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const outputDir = resolve(".prerender");

try {
  const { render } = await import(pathToFileURL(resolve(outputDir, "entry-server.js")));
  const indexPath = resolve("dist/index.html");
  const html = await readFile(indexPath, "utf8");
  const marker = '<div id="root"></div>';

  if (!html.includes(marker)) throw new Error("Missing empty #root marker in dist/index.html");

  await writeFile(indexPath, html.replace(marker, `<div id="root">${render()}</div>`));
} finally {
  await rm(outputDir, { recursive: true, force: true });
}
