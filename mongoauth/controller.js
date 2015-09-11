//module
var express = require('express');
var router = express.Router();

module.exports = function(passport) {

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
		res.render('dashboard.jade', { 'user':req.user });
	});

	router.get('/logout', function(req, res){
		req.logout();
		res.redirect('/auth/');
	});
	
	return router;
};

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/auth/login');
}
