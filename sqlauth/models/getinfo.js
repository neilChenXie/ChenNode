var util = require('util');
var Q = require('q');

var getUserByID = function(mysql, uid) {
	var deferred = Q.defer();

	mysql.query('SELECT * FROM user WHERE UID = '+uid, function(err, row){
		if (err) {
			deferred.reject(err);
		} else {
			//console.log(row);
			deferred.resolve(row);
		}
	});
	return deferred.promise;
};

var getUserByEmail = function(mysql, email) {
	var deferred = Q.defer();

	qry = util.format('SELECT * FROM user WHERE Email = "%s"', email);

	mysql.query(qry, function(err, row){
		if( err ) {
			deferred.reject(err);
		} else {
			//console.log(row);
			deferred.resolve(row);
		}
	});

	return deferred.promise;
};

module.exports = {
	'getUserByID':getUserByID,
	'getUserByEmail':getUserByEmail
};
