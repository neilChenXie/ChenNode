module.exports = function(passport) {
	//module
	var express = require('express');
	var router = express.Router();
	//var User = require('../models/user');
	//var mongoose = require('mongoose');

	router.get('/', function(req,res){
		res.render('index.jade');
	});

	router.get('/register', function(req,res){
		err = req.flash('signupMessage')[0]; //passport flash message
		res.render('register.jade',{ 'error': err });
	});

	router.post('/register', passport.authenticate('local-signup', {
		successRedirect:'/auth/dashboard',
		failureRedirect:'/auth/register',
		failureFlash: true
	}));
	router.get('/login',  function(req, res){
		if (req.isAuthenticated()) {
			res.redirect('/auth/dashboard');
		}
		res.render('login.jade', {'error': req.flash('loginMessage')[0] });
	});

	router.post('/login', passport.authenticate('local-login',{
		successRedirect: '/auth/dashboard',
		failureRedirect: '/auth/login',
		failureFlash: true
	}));

	router.get('/dashboard', isLoggedIn, function(req,res){
		console.log(req.user);
		res.render('dashboard.jade', { 'user':req.user });
	});

	router.get('/logout', function(req, res){
		req.logout();
		res.redirect('/auth/');
	});
	
	//router.post('/register', function(req,res){
		//var newUser = new User({
			//firstName: req.body.firstName,
			//lastName: req.body.lastName,
			//email: req.body.email,
			//password:req.body.password
		//});
		////save to DB
		//newUser.save(function(err){
			//if (err) {
				//error = "try again";
				//if(err.code == 11000) {
					//error = "email already exist";
				//}
				//res.render('register.jade',{ 'error':error });
			//} else {
				//res.redirect('/auth/dashboard');
			//}
		//});
	//});

	//router.post('/login', function(req, res){
		//User.findOne({ 'email': req.body.email }, function(err, user) {
			//if (!user) {
				//res.render('login.jade', {'error': 'Invalid user' });
			//} else {
				//if (req.body.password === user.password) {
					//res.redirect('/auth/dashboard');
				//} else {
					//res.render('login.jade', {'error': 'Invalid user' });
				//}
			//}
		//});
	//});

	return router;
};

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/auth/login');
}
