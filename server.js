/*module needed*/
var express = require("express");
var path = require("path");
var http = require("http");
var morgan = require('morgan');

/*project*/
var test_project = require('./projTest');
var auth_project = require('./projAuth');
var blog_project = require('./projBlog');

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
	this.app.use(morgan('dev'));
	
	//redirect to github 
	this.app.get('/', function(req,res){
		res.redirect(301,'https://github.com/neilChenXie/ChenNode');
	});

	//add project
	test_project(this.app);
	auth_project(this.app);
	blog_project(this.app);
};


//socket.io project
//Server.prototype.sioConfig = function (router,sioHandler) {
	////hook to server
	//this.sioApp = express();
	//this.app.use('/sio',this.sioApp);
	
	////configuration
	//this.sioApp.set('view engine','ejs');
	//this.sioApp.set('views',path.join(__dirname,'views')); //for html engine
	
	////use middlewware
	//this.sioApp.use(express.static(path.join(__dirname,'public'))); //for html links
	
	////router
	//this.sioApp.use('/',router);
	
	////socket.io defination
	//var mySio = this.sio = new sio();
	//sioHandler(mySio);
//};

/*start all service*/
//start main server
Server.prototype.startServer = function () {
	this.app.listen(process.env.SERPORT, function() {
		console.log("server start with port:" + process.env.SERPORT);
	});

};

//start socket server
//Server.prototype.startSocket = function() {
	////start socket.io
	//this.sio.listen(process.env.SIOPORT);
	//console.log("socket start with port:" + process.env.SIOPORT);
//};

module.exports = Server;
