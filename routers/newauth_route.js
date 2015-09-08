var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mongoose = require('mongoose');

router.get('/', function(req,res){
	res.render('index.jade');
});

router.get('/register', function(req,res){
	res.render('register.jade');
});

router.post('/register', function(req,res){
	var newUser = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password:req.body.password
	});
	//save to DB
	newUser.save(function(err){
		if (err) {
			error = "try again";
			if(err.code == 11000) {
				error = "email already exist";
			}
			res.render('register.jade',{ 'error':error });
		} else {
			res.redirect('/auth/dashboard');
		}
	});
});

router.get('/login', function(req, res){
	res.render('login.jade');
});

router.post('/login', function(req, res){
	User.findOne({ 'email': req.body.email }, function(err, user) {
		if (!user) {
			res.render('login.jade', {'error': 'Invalid user' });
		} else {
			if (req.body.password === user.password) {
				res.redirect('/auth/dashboard');
			} else {
				res.render('login.jade', {'error': 'Invalid user' });
			}
		}
	});
});

router.get('/dashboard', function(req,res){
	res.render('dashboard.jade');
});

module.exports = router;
