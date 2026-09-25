// Renders every route in jsdom after `vite build` and writes static HTML
// (dist/<route>.html, served via Vercel cleanUrls), dist/404.html and
// dist/sitemap.xml. Pages keep their existing client-side meta code; this
// just captures the head/body they produce so crawlers get real HTML.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import { JSDOM } from "jsdom";

const ROOT = resolve(import.meta.dirname, "..");
const DIST = join(ROOT, "dist");
const SSR_OUT = join(ROOT, "node_modules/.prerender");
const SITE = "https://bharatmile.com";
const template = readFileSync(join(DIST, "index.html"), "utf8");

const GLOBALS = [
  "window", "document", "navigator", "location", "history", "HTMLElement", "Element", "Node",
  "Event", "CustomEvent", "MutationObserver", "getComputedStyle", "requestAnimationFrame",
  "cancelAnimationFrame", "sessionStorage", "localStorage", "DOMParser", "HTMLIFrameElement",
];

function installDom(url) {
  const dom = new JSDOM(template, { url, pretendToBeVisual: true });
  const { window } = dom;
  class Observer { observe() {} unobserve() {} disconnect() {} takeRecords() { return []; } }
  window.IntersectionObserver = Observer;
  window.ResizeObserver = Observer;
  window.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} });
  window.scrollTo = () => {};
  for (const key of [...GLOBALS, "IntersectionObserver", "ResizeObserver", "matchMedia", "scrollTo"]) {
    Object.defineProperty(globalThis, key, { value: window[key], configurable: true, writable: true });
  }
  return dom;
}

const settle = (window, ms = 250) => new Promise((r) => window.setTimeout(r, ms));

function outFile(path) {
  if (path === "/") return join(DIST, "index.html");
  if (path === "/404") return join(DIST, "404.html");
  return join(DIST, `${path.slice(1)}.html`);
}

// Map route path -> source file (from src/routes.jsx) for sitemap lastmod.
function sourceFiles() {
  const src = readFileSync(join(ROOT, "src/routes.jsx"), "utf8");
  const map = { "/": "src/pages/Home.jsx" };
  for (const m of src.matchAll(/\("(\/[^"]*)",\s*\(\)\s*=>\s*import\("\.\/([^"]+)"\)/g)) {
    const file = `src/${m[2]}`;
    map[m[1]] = /\.jsx?$/.test(file) ? file : `${file}.jsx`;
  }
  return map;
}

function lastmod(file) {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", file], { cwd: ROOT, encoding: "utf8" }).trim();
    return out || new Date().toISOString().slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

// Boot a DOM before importing the bundle: some libraries read window at import time.
installDom(`${SITE}/`);
const entry = await import(pathToFileURL(join(SSR_OUT, "entry-prerender.js")).href);
const paths = [...entry.routes.map((r) => r.path), "/404"];
const failures = [];

for (const path of paths) {
  const dom = installDom(`${SITE}${path === "/404" ? "/__not-found__" : path}`);
  try {
    const { route, root } = await entry.renderPage(window.location.pathname);
    await settle(dom.window);
    const doc = dom.window.document;
    entry.normalizeHead(doc, path, { kind: route?.kind, notFound: !route });

    const html = doc.getElementById("root").innerHTML;
    if (!doc.querySelector("#root h1") || html.includes(">Loading…<")) {
      failures.push(`${path}: rendered without an <h1> or stuck on Suspense fallback`);
    }
    const file = outFile(path);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, dom.serialize());
    root.unmount();
  } catch (err) {
    failures.push(`${path}: ${err.stack || err}`);
  } finally {
    dom.window.close();
  }
}

// Sitemap generated from the same route table, so it can't drift.
const files = sourceFiles();
const priority = (p) => (p === "/" ? "1.0" : /^\/(ranthambore-safari-tours|jaipur-sightseeing-packages)$/.test(p) ? "0.9" : "0.7");
const urls = entry.routes
  .map(({ path }) => {
    const loc = path === "/" ? `${SITE}/` : `${SITE}${path}`;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod(files[path])}</lastmod>\n    <priority>${priority(path)}</priority>\n  </url>`;
  })
  .join("\n");
writeFileSync(
  join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

rmSync(SSR_OUT, { recursive: true, force: true });

if (failures.length) {
  console.error(`Prerender failed for ${failures.length} route(s):\n` + failures.join("\n"));
  process.exit(1);
}
console.log(`Prerendered ${paths.length} pages + sitemap (${entry.routes.length} URLs).`);
process.exit(0);
