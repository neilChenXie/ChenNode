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
	//this.app.use(express.static(path.join(__dirname,'public/intro'))); //for html links
	this.app.get('/', function(req,res){
		res.redirect(301,'https://github.com/neilChenXie/ChenNode');
	});
};


//methods
//auth project
Server.prototype.authConfig = function (router) {
	//hock to server
	this.authApp = express();
	this.app.use('/auth', this.authApp);

	//configuration
	this.authApp.set('view engine', 'jade');
	this.authApp.set('views', path.join(__dirname,'views/auth'));

	//router
	this.authApp.use('/', router);
};

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

//blog project
Server.prototype.blogConfig = function () {
	//hook to server
	this.chenBlog = express();
	this.app.use('/blog',this.chenBlog);

	//Project Configuration
	//this.chenProfile.set('view engine','ejs');
	//this.chenProfile.set('views',path.join(__dirname,'views')); //for html engine
	
	//use middlewware
	this.chenBlog.use(express.static(path.join(__dirname,'public/blog'))); //for html links
	
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
