module.exports = function(app) {
	var express = require('express');
	var path = require('path');

	//application
	var blog = express();
	app.use('/blog',blog);

	//use middlewware
	blog.use(express.static(path.join(__dirname,'public/blog'))); //for html links
};
