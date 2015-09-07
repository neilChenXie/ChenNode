var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

module.exports = function (passport) {

	//passport serialize and deserialize
	passport.serializeUser(function(user, done){
		console.log('serialize user:', user.username);
		return done(null, user.username);
	});

	passport.deserializeUser(function(user, done){
		return done('TODO: deserializeUser', false);
	});

	passport.use('login', new LocalStrategy(
		{
			passReqToCallback : true // pass req to callback function
		},
		function(req, username, password, done) {
			return done('TODO: login', false);
		}
		)
	);

	passport.use('signup', new LocalStrategy(
		{
			passReqToCallback : true // pass req to callback function
		},
		function(req, username, password, done) {
			return done('TODO: signup', false);
		}
		)
	);
};
