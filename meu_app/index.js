var express = require('express');
var app = express();
const PORT = 3000;

app.get('/', function(req, res) {
    res.send('oaskdoaskdoaskdokas');
});

app.get('/contato', function(req, res) {
    res.send('aaaa');
});

app.listen(PORT);
console.log(`Server on port ${PORT}`);