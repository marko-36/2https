const http = require('http');
http.createServer((req, res) => {
    res.writeHead(301, {
        "location" : 'https://'+req.headers.host.replace('www.','') + req.url
    });
    res.end('');
}).listen(80);