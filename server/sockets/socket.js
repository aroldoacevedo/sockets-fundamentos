const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    //  Enviar
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        //broadcast:todos lo escuchan
        client.broadcast.emit('enviarMensaje', data);

        /*if (data.usuario) {
            callback({
                resp: 'TODO SALIO BIEN!'
            });
        } else {
            callback({
                resp: 'TODO SALIO MALO!!!'
            });
        }*/

    });
});