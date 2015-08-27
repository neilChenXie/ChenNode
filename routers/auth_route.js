var express = require('express');
var router = express.Router();
var mongoose =require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var User = mongoose.model('User', new Schema({
	id: ObjectId,
	firstName: String,
	lastName: String,
	email: { type: String, unique: true },
	password: String
}));

mongoose.connect('mongodb://localhost/newauth');

router.get('/', function(req, res){
	res.render('index.jade');
});

router.get('/register', function(req, res){
	res.render('register.jade');
});

router.post('/register', function(req, res){
	//res.json(req.body);
	var user = new User({
		firstName:req.body.firstName,
		lastName:req.body.lastName,
		email:req.body.email,
		password:req.body.password
	});
	user.save( function(err) {
		if (err) {
			error = "try again!";
			if (err.code == 11000) {
				error = "the Email is not unique";
			}
			res.render('register.jade',{ error: error });
		} else {
			res.redirect('/auth/dashboard');
		}
	});
});

router.get('/login', function(req, res){
	res.render('login.jade');
});

router.post('/login', function(req, res){
	User.findOne({ email:req.body.email }, function(err, user) {
		if (!user) {
			res.render('login.jade', { error: "Invalid user" });
		} else {
			if (req.body.password === user.password) {
				res.redirect('/auth/dashboard');
			} else {
			
			}
		}
	});
});

router.get('/logout', function(req,res){
	res.redirect('/auth');
});

router.get('/dashboard', function(req, res){
	res.render('dashboard.jade');
});
module.exports = router;
