import mongoose from 'mongoose';

const sexoSchema = new mongoose.Schema({
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

const Sexo = mongoose.model('sexo', sexoSchema);

export default Sexo;
