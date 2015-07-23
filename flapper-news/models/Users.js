var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	admin: Boolean
});

mongoose.model('User', UserSchema);