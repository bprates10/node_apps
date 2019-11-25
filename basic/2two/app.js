var EventEmitter = require('events');
var emitter = new EventEmitter();

class Cao extends EventEmitter {
    latir() {
        console.log('latindo');
    }
}

// escutando evento
emitter.on('meu_evento', function(numero) {
    console.log('evento executado ' + numero);
})

// executando o evento
emitter.emit('meu_evento', 123);

var Rex = new Cao();

// executa a função sempre que chamado
Rex.on('pessoa_no_portao', Rex.latir);
// executa a função apenas uma vez
// Rex.once('pessoa_no_portao', Rex.latir);
Rex.emit('pessoa_no_portao');
// Rex.removeListener('pessoa_no_portao', Rex.latir);
// Rex.on('pessoa_no_portao', Rex.latir);
Rex.emit('pessoa_no_portao');
Rex.emit('pessoa_no_portao');

