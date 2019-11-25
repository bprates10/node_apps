// filesystem
var fs = require('fs');

// criando arquivo - sempre cria um arquivo novo
// função assincrona, entao passa um callback
fs.writeFile('nome_arquivo.txt', 'conteudo_arquivo', function(err) {
    if (err) {
        console.log(err);
    }

    console.log('Created File');
});

// criando arquivo - adiciona conteúdo ao final
fs.appendFile('nome_arquivo.txt', 'conteudo_arquivo ', function(err) {
    if (err) {
        console.log(err);
    }

    console.log('Created File');
});

// leitura arquivo
fs.readFile('nome_arquivo.txt', function(err, content_file) {
    if (err) {
        console.log(err);
    }

    console.log('Content File:', content_file.toString());
})

// SYNC para versão síncrona*
var data = fs.readFileSync('nome_arquivo.txt');
console.log(data.toString());