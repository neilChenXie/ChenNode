module.exports = function(app) {
	var express = require('express');
	var sio  = require("socket.io");
	var path = require('path');
	var router = require('./routers/sio_route');
	
	//hook to server
	sio = express();
	app.use('/sio',sio);
	
	//configuration
	sio.set('view engine','ejs');
	sio.set('views',path.join(__dirname,'views')); //for html engine
	
	//use middlewware
	sio.use(express.static(path.join(__dirname,'public'))); //for html links
	
	//router
	sio.use('/',router);
	
	//socket.io defination
	var mySio = app.sio = new sio();
	mySio.of('bird').on("connection",function(socket){
		console.log('a new connected');
	});
};
