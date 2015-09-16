var express = require('express');
var controller = express.Router();

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/sqlauth/login');
}

module.exports = function(passport) {

	controller.route('/')
	.get(function(req, res){
		res.render('index.jade');
	});

	controller.route('/login')
	.get(function(req,res) {
		if (req.isAuthenticated()) {
			res.redirect('/sqlauth/dashboard');
		} else {
			err = req.flash('loginMessage')[0];
			res.render('login.jade',{ 'error':err });
		}
	})
	.post(passport.authenticate('local-login', {
		successRedirect: '/sqlauth/dashboard',
		failureRedirect: '/sqlauth/login',
		failureFlash: true
	}));

	controller.route('/signup')
	.get(function(req, res){
		err = req.flash('signupMessage')[0];
		res.render('signup.jade', { 'error': err });
	})
	.post(passport.authenticate('local-signup', {
		successRedirect:'/sqlauth/dashboard',
		failureRedirect:'/sqlauth/signup',
		failureFlash: true
	}));

	controller.route('/dashboard')
	.get(isLoggedIn, function(req,res){
		var info = {
			'firstName':req.user.Firstname,
			'lastName': req.user.Lastname,
			'email': req.user.Email,
			'phone': req.user.Phone
		};
		res.render('dashboard.jade', { 'user':info });
	});

	controller.route('/logout')
	.get(function(req, res){
		req.logout();
		res.redirect('/sqlauth/');
	});

	return controller;
};
