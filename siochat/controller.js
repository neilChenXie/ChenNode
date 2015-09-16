var express = require('express');
var controller = express.Router();

module.exports = function() {

	controller.route('/')
	.get(function(req, res){
		//res.send("hello");
		res.render('index.ejs');
	});

	return controller;
};
