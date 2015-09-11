var path = require("path");
var express = require('express');
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require('cookie-parser');
var passport = require("passport");
var flash = require("connect-flash");

//connect to database
var mongoose = require('mongoose');
var configDB = require('./config/database');

module.exports = function(app) {
	
	//DB connection
	mongoose.connect(configDB.url);


	//application
	var auth = express();
	app.use('/auth', auth);

	//configuration
	auth.locals.pretty = true;//not minify html
	auth.set('view engine', 'jade');
	auth.set('views', path.join(__dirname,'views'));

	//middleware
	//head
	//cookie
	auth.use(cookieParser());
	//session
	auth.use(session({
		secret: 'chenxiewarrior',
		resave: true, //avoid session expiring
		saveUninitialized: false //save to new session
	}));
	
	//body
	auth.use(bodyParser.json());
	auth.use(bodyParser.urlencoded({ extended:true }));
	//passport neeeded
	auth.use(passport.initialize());
	//auth.use(function(req,res,next){
		//console.log('before');
		//next();
	//});
	auth.use(passport.session());
	//auth.use(function(req,res,next){
		//console.log('worked');
		//next();
	//});
	auth.use(flash());

	require('./config/passport')(passport);


	//router
	var router = require('./controller');
	auth.use('/', router(passport));
};
