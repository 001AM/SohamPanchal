// Post-build: render each route in headless Chrome and write static HTML + sitemap, so non-JS scrapers see content.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const dist = path.resolve("dist");
const slugs = [...fs.readFileSync("src/data/posts.ts", "utf8").matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const routes = [
  "/", "/about", "/projects", "/photography", "/explore", "/writing", "/now", "/contact",
  ...slugs.map((s) => `/writing/${s}`),
];
const site = (process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) || "").replace(/\/$/, "");

const shell = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const server = http.createServer((req, res) => {
  const p = path.join(dist, decodeURIComponent(req.url.split("?")[0]));
  const file = fs.existsSync(p) && fs.statSync(p).isFile() ? p : path.join(dist, "index.html");
  res.writeHead(200, { "content-type": { ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml" }[path.extname(file)] || "text/html" });
  fs.createReadStream(file).pipe(res);
}).listen(0);
const titles = [];
const base = `http://localhost:${server.address().port}`;

try {
  const puppeteer = createRequire(import.meta.url)("puppeteer");
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  for (const route of routes) {
    const page = await browser.newPage();
    await page.goto(base + route, { waitUntil: "networkidle0" });
    // per-page title/description from the rendered h1 + first paragraph (pages set none themselves)
    const meta = await page.evaluate(() => ({
      h1: document.querySelector("h1")?.textContent?.trim() || "",
      p: [...document.querySelectorAll("p")].map((e) => e.textContent.trim()).find((t) => t.length > 60)?.slice(0, 200) || "",
    }));
    if (route !== "/" && meta.h1) {
      const esc = (t) => t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
      await page.evaluate((t, d) => {
        document.title = t;
        document.querySelector('meta[name="description"]').content = d;
      }, `${meta.h1} — Soham Panchal`, meta.p);
    }
    titles.push([route, await page.title(), meta.p]);
    let html = await page.content();
    if (site) html = html.replace("</head>", `<link rel="canonical" href="${site}${route === "/" ? "" : route}" /></head>`);
    const out = route === "/" ? "index.html" : `${route.slice(1)}/index.html`;
    fs.mkdirSync(path.dirname(path.join(dist, out)), { recursive: true });
    fs.writeFileSync(path.join(dist, out), html);
    await page.close();
    console.log("prerendered", route);
  }
  await browser.close();
} catch (e) {
  // ponytail: fail soft so a missing Chrome never breaks the deploy; site just stays a plain SPA
  console.warn("prerender skipped:", e.message);
  fs.writeFileSync(path.join(dist, "index.html"), shell);
}
server.close();

if (site) {
  const urls = routes.map((r) => `<url><loc>${site}${r === "/" ? "" : r}</loc></url>`).join("");
  fs.writeFileSync(path.join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
  fs.appendFileSync(path.join(dist, "robots.txt"), `\nSitemap: ${site}/sitemap.xml\n`);
}

// llms.txt: plain-text index for LLM agents (llmstxt.org format)
fs.writeFileSync(path.join(dist, "llms.txt"), `# Soham Panchal\n\n> Full stack engineer from Mumbai: AI systems, financial infrastructure, developer tools.\n\n## Pages\n\n${titles.map(([r, t, d]) => `- [${t}](${site}${r}): ${d}`).join("\n")}\n`);
