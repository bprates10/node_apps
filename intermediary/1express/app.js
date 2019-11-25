var express = require('express');

var app = express();

app.use('/static', express.static('public'));

app.get('/abc/:id?', function(req, res) {
    res.send("hello " + req.params.id);
});

app.listen(3000, function() {
    console.log('App rodando na porta 3000');
});