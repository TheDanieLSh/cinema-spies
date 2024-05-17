const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const contentType = 'text/html';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('Page not found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

const IP = Object.values(os.networkInterfaces()).flat()
    .find(iface => iface.family == 'IPv4' && !iface.internal)?.address;

const PORT = process.env.PORT || 3000;

server.listen(PORT, IP, () => {
    console.log(`Server running on ${IP + ':'+ PORT}/`);
});
