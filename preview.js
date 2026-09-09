const http = require('http');
const fs = require('fs');
const path = require('path');

const projectRoot = 'G:\\作品集codex\\Jamie-Portfolio-holder-transfer';
const stagingRoot = __dirname;
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4'
};

http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
  let file;
  if (pathname === '/' || pathname === '/works/ipad-mini-folio2/' || pathname === '/works/ipad-mini-folio2/index.html') {
    file = path.join(stagingRoot, 'index.html');
  } else if (pathname === '/case-details.css') {
    file = path.join(stagingRoot, 'case-details.css');
  } else {
    file = path.resolve(projectRoot, pathname.replace(/^\/+/, ''));
    if (file !== projectRoot && !file.startsWith(projectRoot + path.sep)) {
      response.writeHead(403).end('Forbidden');
      return;
    }
  }
  fs.stat(file, (error, stats) => {
    if (error || !stats.isFile()) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
      return;
    }
    response.writeHead(200, { 'Content-Type': mime[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    fs.createReadStream(file).pipe(response);
  });
}).listen(4178, '127.0.0.1', () => console.log('READY http://127.0.0.1:4178/works/ipad-mini-folio2/'));
