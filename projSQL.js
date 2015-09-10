var express = require('express');

var router = require('./routers/sql_route');


module.exports = function(app) {
	
	//hook to app
	var sql = express();
	app.use('/sql', sql);

	sql.use('/',router);
};

