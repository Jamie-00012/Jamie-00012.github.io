const http = require('http');
const fs = require('fs');
const path = require('path');

const projectRoot = 'G:\\作品集codex\\Jamie-Portfolio-holder-transfer';
const stagingRoot = __dirname;
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
  let file;
  if (pathname === '/') {
    file = path.join(stagingRoot, 'home-index.html');
  } else if (pathname === '/works/ipad-mini-folio2/' || pathname === '/works/ipad-mini-folio2/index.html') {
    file = path.join(stagingRoot, 'index.html');
  } else if (pathname === '/works/mate-x6-case/' || pathname === '/works/mate-x6-case/index.html') {
    file = path.join(stagingRoot, 'mate-x6-index.html');
  } else if (pathname === '/works/samsung-galaxy-watch-band/' || pathname === '/works/samsung-galaxy-watch-band/index.html') {
    file = path.join(stagingRoot, 'watch-index.html');
  } else if (pathname === '/works/ecobine-brand-system/' || pathname === '/works/ecobine-brand-system/index.html') {
    file = path.join(stagingRoot, 'brand-index.html');
  } else if (pathname === '/works/tea-editorial/' || pathname === '/works/tea-editorial/index.html') {
    file = path.join(stagingRoot, 'tea-index.html');
  } else if (pathname === '/works/festive-tea-packaging/' || pathname === '/works/festive-tea-packaging/index.html') {
    file = path.join(stagingRoot, 'packaging-index.html');
  } else if (pathname === '/editorial-case.css') {
    file = path.join(stagingRoot, 'editorial-case.css');
  } else if (pathname === '/watch-case.css') {
    file = path.join(stagingRoot, 'watch-case.css');
  } else if (pathname === '/case-details.css') {
    file = path.join(stagingRoot, 'case-details.css');
  } else if (pathname === '/home-overrides.css') {
    file = path.join(stagingRoot, 'home-overrides.css');
  } else if (pathname === '/portfolio-interactions.css') {
    file = path.join(stagingRoot, 'portfolio-interactions.css');
  } else if (pathname === '/portfolio-interactions.js') {
    file = path.join(stagingRoot, 'portfolio-interactions.js');
  } else if (pathname === '/script.js') {
    file = path.join(stagingRoot, 'script.js');
  } else if (pathname === '/assets/folio/folio-mobile-reference-new.webp') {
    file = path.join(stagingRoot, 'folio-mobile-reference-new.webp');
  } else if (pathname === '/assets/mate-web-ui-hero.webp') {
    file = path.join(stagingRoot, 'mate-web-ui-hero.webp');
  } else if (pathname === '/assets/mate-web-ui-overview.webp') {
    file = path.join(stagingRoot, 'mate-web-ui-overview.webp');
  } else if (pathname === '/assets/mate-web-ui-details.webp') {
    file = path.join(stagingRoot, 'mate-web-ui-details.webp');
  } else if (pathname === '/case-mate.webp') {
    file = path.join(stagingRoot, 'case-mate.webp');
  } else if (pathname === '/case-ipad.webp') {
    file = path.join(stagingRoot, 'case-ipad.webp');
  } else if (pathname === '/case-holder.webp') {
    file = path.join(stagingRoot, 'case-holder.webp');
  } else if (pathname === '/case-watch.webp') {
    file = path.join(stagingRoot, 'case-watch.webp');
  } else if (pathname === '/case-mx.webp') {
    file = path.join(stagingRoot, 'case-mx.webp');
  } else if (pathname === '/assets/hero-background-static.webp') {
    file = path.join(stagingRoot, 'hero-background-static.webp');
  } else if (pathname === '/assets/hero-background.mp4') {
    file = path.join(stagingRoot, 'hero-background.mp4');
  } else if (pathname === '/assets/experience-banner-new.webp') {
    file = path.join(stagingRoot, 'experience-banner-new.webp');
  } else if (pathname === '/assets/new-page-hero.webp') {
    file = path.join(stagingRoot, 'new-page-hero.webp');
  } else if (pathname === '/assets/new-page-materials.webp') {
    file = path.join(stagingRoot, 'new-page-materials.webp');
  } else if (pathname === '/assets/new-page-editorial.webp') {
    file = path.join(stagingRoot, 'new-page-editorial.webp');
  } else if (pathname === '/assets/new-page-product.webp') {
    file = path.join(stagingRoot, 'new-page-product.webp');
  } else if (pathname === '/assets/watch-hero.webp') {
    file = path.join(stagingRoot, 'watch-hero.webp');
  } else if (pathname === '/assets/watch-reference-hero.webp') {
    file = path.join(stagingRoot, 'watch-reference-hero.webp');
  } else if (pathname === '/assets/watch-reference-commerce.webp') {
    file = path.join(stagingRoot, 'watch-reference-commerce.webp');
  } else if (pathname === '/assets/watch-wear-1.webp') {
    file = path.join(stagingRoot, 'watch-wear-1.webp');
  } else if (pathname === '/assets/watch-wear-2.webp') {
    file = path.join(stagingRoot, 'watch-wear-2.webp');
  } else if (pathname === '/assets/watch-wear-3.webp') {
    file = path.join(stagingRoot, 'watch-wear-3.webp');
  } else if (pathname === '/assets/watch-wear-5.webp') {
    file = path.join(stagingRoot, 'watch-wear-5.webp');
  } else if (pathname === '/assets/watch-wear-6.webp') {
    file = path.join(stagingRoot, 'watch-wear-6.webp');
  } else if (pathname === '/assets/watch-wear-7.webp') {
    file = path.join(stagingRoot, 'watch-wear-7.webp');
  } else if (pathname === '/assets/watch-wear-8.webp') {
    file = path.join(stagingRoot, 'watch-wear-8.webp');
  } else if (pathname.startsWith('/assets/brand/') || pathname.startsWith('/assets/tea/') || pathname.startsWith('/assets/packaging/')) {
    file = path.resolve(stagingRoot, pathname.replace(/^\/+/, ''));
    if (!file.startsWith(path.join(stagingRoot, 'assets') + path.sep)) {
      response.writeHead(403).end('Forbidden');
      return;
    }
  } else {
    const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
    file = path.resolve(projectRoot, relative);
    if (file !== projectRoot && !file.startsWith(projectRoot + path.sep)) {
      response.writeHead(403).end('Forbidden');
      return;
    }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  }
  fs.stat(file, (error, stats) => {
    if (error || !stats.isFile()) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
      return;
    }
    response.writeHead(200, { 'Content-Type': mime[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store, max-age=0' });
    fs.createReadStream(file).pipe(response);
  });
}).listen(Number(process.env.PORT || 4179), '127.0.0.1', () => console.log(`READY http://127.0.0.1:${Number(process.env.PORT || 4179)}/`));
