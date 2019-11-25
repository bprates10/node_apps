var http = require('http');
var fs = require('fs');
var url = require('url');

// req requisição do cliente
// res resposta enviada para o cliente
var server = http.createServer(function(req, res) {

    // dados da url - url da requisição
    var url_parts = url.parse(req.url);
    // caminho do arquivo
    var path = url_parts.pathname;

    fs.readFile( __dirname + path , function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('Not Found');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
        }
        res.end();
    });
});

server.listen(3000);