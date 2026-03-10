const app = require('./config/server');//1




const server = app.listen(80, function(){//2 -> config/server
	console.log('SERVER ON');
});


const io = require('socket.io').listen(server);

/*criar a conexão por websocket */

app.set('io', io);

io.on('connection', function(socket){
	console.log('Usuário se conectou')

	socket.on('disconnect', function(){
		console.log('Usuário se desconectou');
	});

	socket.on('msgParaServidor', function(data){

		/* dialogo */

		socket.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem });

		socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem });


		/* Participantes */

		if(parseInt(data.apelido_atualizado_nos_clientes) == 0){

		socket.emit('participantesParaCliente', {apelido: data.apelido});

		socket.broadcast.emit('participantesParaCliente', {apelido: data.apelido});

	}



	})
})

