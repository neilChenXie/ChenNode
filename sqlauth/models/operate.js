var Q = require('q');
var util = require('util');

var addNewUser = function(mysql,user) {
	var deferred = Q.defer();

	qry = util.format("INSERT INTO user VALUES (NULL,'%s','%s','%s','%s','%s')", user.firstName, user.lastName, user.email, user.password, user.phone);
	mysql.query(qry, function(err,row){
		if (err) { deferred.reject(err); }
		else {
			//console.log(row);
			deferred.resolve(row.insertId); 
		}
	});

	return deferred.promise;
};

module.exports = {
	'addNewUser':addNewUser
};
