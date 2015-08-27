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
module.exports = router;
