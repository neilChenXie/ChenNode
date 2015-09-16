var express = require('express');
var path = require('path');
var controller = require('./controller');

module.exports = function(app) {
	
	var http = require('http').Server(app);
	var io  = require("socket.io")(http);

	//hook to server
	sio = express();
	app.use('/sio',sio);
	
	//configuration
	sio.set('view engine','ejs');
	sio.set('views',path.join(__dirname,'views')); //for html engine
	
	//use middlewware
	sio.use(express.static(path.join(__dirname,'public'))); //for html links
	
	//router
	
	//socket.io defination
	io.on('connect', function(socket){
		console.log("a user is connected");
		socket.broadcast.emit('user connected');
		socket.on('chat message',function(msg){
			//console.log('message: '+ msg);
			socket.emit('chat message', msg);
			socket.broadcast.emit('chat message', msg);
		});
		socket.on('disconnect', function(){
			console.log('a user is disconnected');
		});
	});

	sio.use('/',controller());

	return http;
};
