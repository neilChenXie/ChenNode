/*module needed*/
var express = require("express");
var path = require("path");
var http = require("http");
var sio  = require("socket.io");


/*test field*/
//var app = express();
//newHttp = http.Server(this.sioApp);
//newSio = sio(this.http);
//newSio.sockets.on('connection', function(socket){
//	console.log('one more connect');
//});
/************/

/*constructor*/
var Server = function(port) {
	//this.port = process.env.PORT || 8080;
	process.env.SERPORT = port.serPort || 8000;
	process.env.SIOPORT = port.sioPort || 8100;

	//Project based
	this.app = express();
};


//methods
//socket.io project
Server.prototype.sioConfig = function (router,sioHandler) {
	//hook to server
	this.sioApp = express();
	this.app.use('/sio',this.sioApp);
	
	//configuration
	this.sioApp.set('view engine','ejs');
	this.sioApp.set('views',path.join(__dirname,'views')); //for html engine
	
	//use middlewware
	this.sioApp.use(express.static(path.join(__dirname,'public'))); //for html links
	
	//router
	this.sioApp.use('/',router);
	
	//socket.io defination
	var mySio = this.sio = new sio();
	sioHandler(mySio);
};

//profile project
Server.prototype.profileConfig = function (router) {
	//hook to server
	this.chenProfile = express();
	this.app.use('/profile',this.chenProfile);

	//Project Configuration
	this.chenProfile.set('view engine','ejs');
	this.chenProfile.set('views',path.join(__dirname,'views')); //for html engine
	
	//use middlewware
	//this.chenProfile.use(express.static(path.join(__dirname,'public/profile'))); //for html links
	this.chenProfile.use(express.static(path.join(__dirname, 'public/profile'))); //for html links
	
	//router
	//this.chenProfile.use('/',router);//not used for my blog
};

//test project
Server.prototype.testConfig = function (router) {
	//hook to server
	this.serverTest = express();
	this.app.use('/test',this.serverTest);
	//Project Configuration
	//use middlewware
	//router
	this.serverTest.use('/',router);
};

/*start all service*/
//start main server
Server.prototype.startServer = function () {
	this.app.listen(process.env.SERPORT, function() {
		console.log("server start with port:" + process.env.SERPORT);
	});

};
//start socket server
Server.prototype.startSocket = function() {
	//start socket.io
	this.sio.listen(process.env.SIOPORT);
	console.log("socket start with port:" + process.env.SIOPORT);
};

module.exports = Server;
