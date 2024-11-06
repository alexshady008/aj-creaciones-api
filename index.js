import express from 'express';
import cors from 'cors';
import config from './config/config.js';
import connectDB from './db/db.js';
import MainRoutes from './routes/index.routes.js';
import { logError, boomError, handleError } from './middleware/errorHandle.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { port } = config;

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

// Create Main Routes
MainRoutes(app);

// Error Handle
//errorHandle();
app.use(logError);
app.use(boomError);
app.use(handleError);

// server listening
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
	connectDB();
});

//mongodb+srv://alexshady008-testing:WN253WnfwnSJYAU3@testingcluster.k1ttb.mongodb.net/
