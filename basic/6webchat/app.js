// passamos a porta a ser trabalhada
var io = require('socket.io')(3000);

// listener connection, executado quando alguem conectar
io.on('connection', (socket)=>{
    console.log('novo usuário conectado');
    // servidor escutando mensagem cliente
    socket.on('client_hello', (data)=>{
        // socket.emit(); // só enviaria para o próprio cliente que enviou
        // socket.broadcast.emit(); // envia para todos os clientes conectados exceto emissor da msg
        io.sockets.emit('server_hello', data); // todos recebem a msg, até quem a enviou
    });
});