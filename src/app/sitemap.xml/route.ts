import fs from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { exec as execCb } from "node:child_process";

const exec = promisify(execCb);

async function getAllPages(dir: string, baseDir = dir): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const routes: string[] = [];

  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      routes.push(...(await getAllPages(full, baseDir)));
    } else if (e.isFile()) {
      // Match App Router page files: page.tsx or page.ts
      if (/^page\.(t|j)sx?$/.test(e.name)) {
        // compute route from file path relative to src/app
        const rel = path.relative(baseDir, full);
        const dirOfPage = path.dirname(rel);
        const route = dirOfPage === "." ? "/" : `/${dirOfPage.replaceAll(path.win32.sep, "/")}`;
        routes.push(route);
      }
    }
  }

  // de-duplicate and sort
  return Array.from(new Set(routes)).sort();
}

async function getLastModISO(filePath: string): Promise<string> {
  try {
    // try to get last commit date for the file
    // Note: in some hosting environments .git may be missing; this will fail and fall back
    const repoPath = process.cwd();
    const rel = path.relative(repoPath, filePath).replaceAll('\\', '/');
    const { stdout } = await exec(`git log -1 --pretty=format:%cI -- "${rel}"`, { cwd: repoPath });
    const iso = stdout && stdout.trim();
    if (iso) return iso;
  } catch (err) {
    // ignore and fallback
  }

  try {
    const st = await fs.stat(filePath);
    return st.mtime.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

export async function GET(request: Request) {
  // Prefer explicit env var, otherwise derive origin from the incoming request so
  // the sitemap URLs match the domain being requested (important for Search Console).
  const originFromReq = new URL(request.url).origin;
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || originFromReq;

  const appDir = path.join(process.cwd(), "src", "app");
  let routes: string[] = [];

  try {
    routes = await getAllPages(appDir, appDir);
  } catch (err) {
    // If reading the filesystem fails for some reason, fall back to a safe hard-coded list
    routes = ["/", "/about", "/contact", "/privacy", "/terms", "/services/private-limited", "/services/llp", "/services/fssai", "/services/iso", "/services/msme", "/services/startup-india", "/services/iec", "/services/drug-license", "/services/trademark"];
  }

  // Include extra dynamic URLs from an external source (CMS) if provided
  const extra: Array<{ loc: string; lastmod?: string }> = [];
  const sitemapDataUrl = process.env.SITEMAP_DATA_URL || process.env.NEXT_PUBLIC_SITEMAP_DATA_URL;
  if (sitemapDataUrl) {
    try {
      const res = await fetch(sitemapDataUrl);
      if (res.ok) {
        const json = (await res.json()) as Array<{ loc: string; lastmod?: string }>;
        if (Array.isArray(json)) extra.push(...json);
      }
    } catch (err) {
      // ignore fetch errors
    }
  }

  // Build full list of URLs with lastmod
  const urlEntries: Array<{ loc: string; lastmod: string }> = [];

  for (const r of routes) {
    // find representative file for lastmod lookup
    const filePath = r === "/" ? path.join(appDir, "page.tsx") : path.join(appDir, r.replace(/^\//, ""), "page.tsx");
    const lastmod = await getLastModISO(filePath).catch(() => new Date().toISOString());
    const loc = new URL(r === "/" ? "/" : r, baseUrl).toString();
    urlEntries.push({ loc, lastmod });
  }

  for (const e of extra) {
    const loc = e.loc.startsWith("http") ? e.loc : new URL(e.loc.replace(/^\//, ""), baseUrl).toString();
    urlEntries.push({ loc, lastmod: e.lastmod || new Date().toISOString() });
  }

  // de-duplicate by loc
  const seen = new Set<string>();
  const unique = urlEntries.filter((u) => {
    if (seen.has(u.loc)) return false;
    seen.add(u.loc);
    return true;
  });

  const urls = unique.map((u) => {
    return `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "text/xml",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}
