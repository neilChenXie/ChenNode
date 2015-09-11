var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

var mysql = require('mysql');
var DBconfig = require('./database');
var DBobj = mysql.createConnection(DBconfig.connect);

var getInfo = require('../models/getinfo');
var operate = require('../models/operate');

module.exports = function(passport) {

	passport.serializeUser(function(user, done){
		return done(null, user.UID);
	});

	passport.deserializeUser(function(id, done){
		getInfo.getUserByID(DBobj, id)
		.then(function(user){
			return done(null, user[0]);
		})
		.catch(function(err){
			console.log(err);
			return done(null, false);
		});
	});
	
	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, email, password,done){
		process.nextTick(function(){
			getInfo.getUserByEmail(DBobj, email)
			.then(function(val){
				if (val !== '') {
					console.log("found exist user");
					return done(null,false,req.flash('signupMessage','email is taken'));
				} else {
					var newUser = {
						'firstName': req.body.firstName,
						'lastName': req.body.lastName,
						'email': req.body.email,
						'password': req.body.password
					};
					operate.addNewUser(DBobj,newUser)
					.then( function(val){
						getInfo.getUserByID(DBobj,val).
						then(function(row){
							return done(row[0]);
						})
						.catch(function(err){
							return done(err);
						});
					})
					.catch( function(err){  
						console.log(err);
						return done(err);
					});
				}
			})
			.catch(function(err){
				return done(err);
			});
		});
	}));

	passport.use('local-login',new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, email, password, done){
		process.nextTick(function(){
			getInfo.getUserByEmail(DBobj, email)
			.then(function(row){
				if (row === '') {
					return done(null, false, req.flash('loginMessage', 'Invalid Login'));
				} else {
					if (password != row[0].Password) {
						return done(null, false, req.flash('loginMessage', 'Invalid Login'));
					} else {
						return done(null, row[0]);
					}
				}
			})
			.catch(function(err){
				console.log(err);
				return done(err);
			});
		});
	}));
};
