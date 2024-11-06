import mongoose from 'mongoose';
import config from '../config/config.js';

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(config.url_mongo);
		console.log(
			`Connection to Database Succesfull > ${connect.connection.host}`,
		);
	} catch (error) {
		console.error('Error: ' + { error });
		//process.exit(1)
	}
};

export default connectDB;
