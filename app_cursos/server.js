var express = require('express');
var bodyParser = require('body-parser');

var app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// function myMiddleware(req, res, next) {
//     req.body.message = "Intercepted by middleware";
//     next();
// }
// app.use(myMiddleware);

app.get('/', function(req, res) {
    res.send('kkkkk');
});

app.post('/teste', function(req, res) {
    var myJson = req.body;
    res.format({
        text: function() {
            // res.send('Just Text');
            res.json(myJson);
        },
        json: function() {
            res.json(myJson);
        }
    });
})

app.listen(PORT);
console.log(`Server on Port ${PORT}`);