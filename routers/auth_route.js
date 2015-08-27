var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('index.jade');
});

router.get('/register', function(req, res){
	res.render('register.jade');
});

router.get('/login', function(req, res){
	res.render('login.jade');
});

router.get('/logout', function(req,res){
	res.redirect('/auth');
});

router.get('/dashboard', function(req, res){
	res.render('dashboard.jade');
});
module.exports = router;
