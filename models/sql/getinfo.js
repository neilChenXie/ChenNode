var Q = require('q');

var getUserbyID = function(mysql, uid) {
	var deferred = Q.defer();

	mysql.query('SELECT * FROM user WHERE UID = '+uid, function(err, row){
		if (err) { deferred.reject(err); }
		else {
			console.log(row);
			deferred.resolve(row);
		}
	});
	return deferred.promise;
};

module.exports = {
	'getUserbyID':getUserbyID	
};
