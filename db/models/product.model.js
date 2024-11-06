import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			default: '',
		},
		price: {
			type: Number,
			required: true,
		},
		price2: {
			type: Number,
			required: true,
		},
		img: {
			type: Array,
			default: [''],
		},
		stock: {
			type: Number,
			default: 0,
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category',
			required: true,
		},
		sexo: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Sexo',
			required: true,
		},
	},
	{ timestamps: true },
);

const Product = mongoose.model('Product', productSchema);

export default Product;
