import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		default: '',
	},
});

const Category = mongoose.model('Category', categorySchema);

export default Category;