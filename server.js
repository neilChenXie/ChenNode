/*module needed*/
var express = require("express");
var path = require("path");


/*constructor*/
var Server = function(port) {
	//this.port = process.env.PORT || 8080;
	this.port = port || 8080;
	//Project based
	this.app = express();
	
	//start server
};


//methods
Server.prototype.profileConfig = function (router) {
	//hook to server
	this.chenProfile = express();
	this.app.use('/profile',this.chenProfile);
	//Project Configuration
	this.chenProfile.set('view engine','ejs');
	this.chenProfile.set('views',path.join(__dirname,'views')); //for html engine
	//use middlewware
	this.chenProfile.use(express.static(path.join(__dirname,'public'))); //for html links
	//router
	this.chenProfile.use('/',router);
};

Server.prototype.testConfig = function (router) {
	//hook to server
	this.serverTest = express();
	this.app.use('/test',this.serverTest);
	//Project Configuration
	//use middlewware
	//router
	this.serverTest.use('/',router);
};


Server.prototype.start = function () {
	var tmpPort = this.port;
	this.app.listen(tmpPort, function() {
		console.log("server start with port:" + tmpPort);
	});
};

module.exports = Server;
