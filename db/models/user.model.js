import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			default: '',
		},
		role: {
			type: String,
			default: 'user',
		},
		orders: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;