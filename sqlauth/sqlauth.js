var path = require('path');
var express = require('express');
var session = require("express-session");
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var passport = require("passport");
var flash = require("connect-flash");

var controller = require('./controller');

module.exports = function(app) {
	sqlauth = express();
	app.use('/sqlauth', sqlauth);

	sqlauth.set('view engine', 'jade');
	sqlauth.set('views', path.join(__dirname,'views/'));

	//middleware
	//header
	sqlauth.use(cookieParser());
	sqlauth.use(session({
		secret: 'authwithsql',
		resave: true,
		saveUninitialized: false
	}));
	//body
	sqlauth.use(bodyParser.json());
	sqlauth.use(bodyParser.urlencoded({ extended:true }));

	//passport
	sqlauth.use(passport.initialize());
	sqlauth.use(passport.session());
	sqlauth.use(flash());

	require('./config/sqlpass')(passport);

	sqlauth.use('/', controller(passport));
};
