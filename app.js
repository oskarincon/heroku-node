const http = require('http');


http.createServer((req, resp) => {
        resp.writeHead(200, { 'Content-Type': 'application/json' })
        let salida = {
            nombre: 'tales',
            edad: 32,
            url: req.url
        }
        resp.write(JSON.stringify(salida));
        resp.end();
    })
    .listen(8080);

console.log('escuchando puerto');