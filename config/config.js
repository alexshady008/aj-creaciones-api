import 'dotenv/config';

const config = {
	port: process.env.PORT || 3000,
	url_mongo: process.env.URL_MONGO,
};

export default config;
