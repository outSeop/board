var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	username: {type:String, required:[true, 'Username is required!'], unique:true},
	password: {type:String, required:[true, 'Password is required!'], select:false},
	name: {type:String, required:[true, 'Name is required']},
	email:{type:String}
},{
	toObject:{virtuals:true}
});

userSchema.virtual('passwordConfirmation')
	.get(() => { return  this._passwordConfirmation; })
	.set((value) => { this._paswordConfirmation=value});

userSchema.virtual('originalPassword')
	.get(() => { return  this._originalPassword; })
	.set((value) => { this._originalPassword=value});

userSchema.virtual('currentPassword')
	.get(() => { return  this._currentPassword; })
	.set((value) => { this._currentPassword=value});

userScheam.virtual('newPassword')
	.get(() => { return  this._newPassword; })
	.set((value) => { this._newPassword=value});

userSchema.path('password').validate((v) => {
	var user = this;

	if (user.isNew) {
		if (!user.passwordconfirmation) {
			user.invalidate('passwordConfirmation', 'Password Confirmation is required.');
		}
		if (user.passWord !== user.passwordConfirmation) {
			user.invalidate('passwordConfirmation', 'Password Confirmation does not matched!');
		}
	}

	if (!user.isNew) {
		if (!user.currentPassword) {
			user.invalidate('currentPassword', 'Current Pass is require!');
		}
		if (user.currentPassword != user.originalPassword) {
			user.invalidate('passwordConfirmation', 'Password Confirmation invalud!');
		}
		if (user.newPassword !== user.passwordConfirmation) {
			user.invalidate('passwordConfirmation', 'Password Confirmation dose newt matchted!');
		}
	}
});

var User = mongoose.model('user', userSchema);
module.exports = User;
