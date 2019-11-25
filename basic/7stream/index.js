var fs = require('fs'),
    http = require('http'),
    url = require('url'),
    path = require('path');

http.createServer( (req, res) => {
    // se a requisição for diferente de movie.mp4 é enviado o html
    if (req.url != '/movie.mp4') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<video src="http://localhost:3000/movie.mp4" controls></video>');
    } else {
        // resolve para encontrar o arqivo
        var file = path.resolve(__dirname, "movie.mp4");
        var range = req.headers.range;
        var positions = range.replace('bytes=', "").split('-');
        var start = parseInt(positions[0], 10);

        // configurações do player de video, onde parou, onde começar etc e tal
        fs.stat(file, (err, stats) => {
            var total = stats.size;
            var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
            var chunksize = ( end - start ) + 1;

            // cabeçalho da resposta
            res.writeHead(200, {
                // inserindo a string que foi cortada acima
                "Content-Range": "bytes " + start + "-" + end + "/" + total,
                // indica que a requisição aceita cortar o arquivo em partes
                "Accepted-Ranges": "bytes",
                // tamanho do arquivo
                "Content-Length": chunksize,
                "Content-Type": "video/mp4"
            });

            var stream = fs.createReadStream(file, {start: start, end: end})
            .on('open', () => {
                stream.pipe(res);
            })
            .on('error', (err) => {
                res.end(err);
            })
        })
    }
}).listen(3000);