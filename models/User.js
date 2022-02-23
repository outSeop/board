var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
	username: {type:String, required:[true, 'Username is required!'], unique:true},
	password: {type:String, required:[true, 'Password is required!'], select:false},
	name: {type:String, required:[true, 'Name is required']},
	email:{type:String}
},{
	toObject:{virtuals:true}
});

var User = mongoose.model('user', userSchema);
module.exports = User;
