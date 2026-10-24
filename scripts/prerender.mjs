// Rendert jede Route nach dem Build als eigene HTML-Datei (SEO: Inhalt, Titel und Beschreibung stehen direkt im HTML).
import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = `${root}dist`;
const { render, metaFor, routeMeta, siteUrl } = await import(pathToFileURL(`${root}dist-ssr/entry-server.js`).href);

const template = await readFile(`${dist}/index.html`, "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function page(url, outPath) {
  const meta = metaFor(url);
  const canonical = `${siteUrl}${url === "/" ? "/" : url}`;
  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(meta.description)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(meta.title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(meta.description)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${canonical}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${canonical}`)
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);
  if (meta.noindex) {
    html = html.replace("</title>", '</title>\n    <meta name="robots" content="noindex" />');
    html = html.replace(/\s*<link rel="canonical"[^>]*>/, "");
  }
  return writeFile(outPath, html);
}

const routes = Object.keys(routeMeta);
await Promise.all(routes.map((url) => page(url, url === "/" ? `${dist}/index.html` : `${dist}${url}.html`)));
await page("/__404", `${dist}/404.html`);
await rm(`${root}dist-ssr`, { recursive: true, force: true });
console.log(`prerendered ${routes.length} routes + 404.html`);
