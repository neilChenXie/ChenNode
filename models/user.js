var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var userSchema = new Schema({
	id: ObjectId,
	firstName: String,
	lastName: String,
	email: { type: String, unique: true },
	password: String
});

module.exports = mongoose.model('User', userSchema);
