import puppeteer from 'puppeteer';
import { createServer } from 'http';
import { readFile, mkdir, writeFile, access } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');
const PORT = 4173;

const ROUTES = [
  '/',
  '/about',
  '/blog',
  '/partner',
  '/privacy',
  '/terms',
  '/uae',
  '/thailand',
  '/vietnam',
  '/china',
  '/turkey',
  '/egypt',
  '/europe',
  '/maldives',
  '/japan',
  '/indonesia',
  '/mauritius',
  '/blog/how-to-choose-dmc-partner',
  '/blog/uae-guide-travel-agents',
  '/blog/thailand-vs-vietnam',
  '/blog/maldives-agent-guide',
  '/blog/japan-travel-season-guide',
  '/blog/increase-agency-margins',
  '/blog/b2b-vs-b2c-travel',
  '/blog/desert-safari-dubai-agent-guide',
  '/blog/turkey-group-tours',
  '/blog/mice-dubai-guide',
  '/blog/travel-trends-2026',
  '/blog/chinese-outbound-tourism',
];

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

/**
 * Start a simple static file server for the dist directory.
 * All non-file routes fall back to index.html (SPA behavior).
 */
function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      let urlPath = req.url.split('?')[0];
      if (urlPath.endsWith('/')) urlPath += 'index.html';

      let filePath = join(DIST_DIR, urlPath);
      const ext = extname(filePath);

      try {
        const data = await readFile(filePath);
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
        res.end(data);
      } catch {
        // SPA fallback: serve index.html for any route without a file extension
        try {
          const fallback = await readFile(join(DIST_DIR, 'index.html'));
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(fallback);
        } catch {
          res.writeHead(404);
          res.end('Not Found');
        }
      }
    });

    server.listen(PORT, () => {
      console.log(`Static server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('Starting SSG pre-rendering...\n');

  // Verify dist exists
  try {
    await access(DIST_DIR);
  } catch {
    console.error('Error: dist/ directory not found. Run "vite build" first.');
    process.exit(1);
  }

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let successCount = 0;
  let errorCount = 0;

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    const page = await browser.newPage();

    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });

      // Wait a bit extra for any dynamic rendering
      await page.evaluate(() => new Promise((r) => setTimeout(r, 500)));

      const html = await page.content();

      // Determine output path
      const routePath = route === '/' ? '' : route;
      const outDir = join(DIST_DIR, routePath);
      const outFile = join(outDir, 'index.html');

      await mkdir(outDir, { recursive: true });
      await writeFile(outFile, html, 'utf-8');

      successCount++;
      console.log(`  [OK] ${route} -> ${outFile.replace(DIST_DIR, 'dist')}`);
    } catch (err) {
      errorCount++;
      console.error(`  [FAIL] ${route}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();

  console.log(`\nPre-rendering complete: ${successCount} succeeded, ${errorCount} failed out of ${ROUTES.length} routes.`);

  if (errorCount > 0) {
    process.exit(1);
  }
}

prerender();
