module.exports = function(app) {
	//module
	var express = require('express');
	var router = require('./routers/test_route');
	
	//application
	test = express();
	app.use('/test',test);
	//Project Configuration
	//use middlewware
	//router
	test.use('/',router);
};
