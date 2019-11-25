var fs = require('fs'),
    Promise = require('promise');

// fs.writeFile('my_file.txt', 'conteudo_arquivo', function(err) {
//     if (err) {
//         console.log(err);
//     }

//     console.log('Created File');
// });


// console.time('Assíncrono');
// var counter = 0;
// for (var i = 0; i < 1000; i++) {
//     fs.readFile('my_file.txt', function(err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         counter++;
//         console.log("Assíncrono " + counter + ": " + data.toString());
//         if (counter == 1000) {
//             console.timeEnd("Assíncrono");
//         }
//     });
// }
// 302.465ms

// console.time('Síncrono');
// for (var i = 0; i < 1000; i++) {
//     var data = fs.readFileSync('my_file.txt');
//     console.log('Síncrono: ' + data);
// }
// console.timeEnd('Síncrono');
// 608.081ms

// promises
function read(file) {
    return new Promise(function(fulfill, reject) {
        fs.readFile(file, function(err, data) {
            if (err) {
                reject();
            } else {
                fulfill(data.toString());
            }
        })
    })
}

read('my_file.txt').then((data)=>{
    console.log(data);
    return '11111';
})
.then((data)=>{
    console.log(data);
    return '22222';
})
.then((data)=>{
    console.log(data);
    return '33333';
})
.done((data)=>{
    console.log(data);
})