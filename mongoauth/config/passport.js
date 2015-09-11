var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

module.exports = function(passport) {

	passport.serializeUser(function(user, done){
		done(null, user._id);
	});
	
	passport.deserializeUser(function(id, done){
		//console.log("deserial: id is"+id);
		User.findById(id, function(err, user){
			if (err) {
				return done(null,false);
			} else {
				return done(null, user);
			}
		});
	});

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, email, password, done){
		process.nextTick(function(){
			User.findOne({'email': email}, function(err, user){
				if (err) {
					return done(err);
				}
				else if (user) {
					return done(null, false, req.flash('signupMessage', 'that email is taken'));
				}
				else {
					var newUser = new User();
					newUser.firstName = req.body.firstName;
					newUser.lastName = req.body.lastName;
					newUser.email = email;
					newUser.password = newUser.generateHash(password); //bcrypt

					newUser.save(function(err){
						if (err)
							throw err;
						return done(null, newUser);
					});
				}	
			});
		});
	}
	));

	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, email, password, done){
		process.nextTick(function(){
			User.findOne({ 'email': email }, function(err, user){
				if (err) {
					return done(err);
				}
				else if (!user) {
					return done(null, false, req.flash('loginMessage', 'Invalid login'));
				}
				else {
					if (!user.validPassword(password)) {
						return done(null, false, req.flash('loginMessage', 'Invalid login'));
					} else {
						return done(null, user);
					}
				}
			});
		});
	}
	));
};
