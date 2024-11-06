import express from 'express';
import { userSchemaCreated, userSchemaUpdated } from '../schema/user.schema.js';
import Validator from '../middleware/validator.js';

const route = express.Router();

// get all users
route.get('/', (req, res) => {
	res.status(500).json({
		status: 'successfull',
		msg: 'Get all users!',
	});
});

// get a user
route.get('/:id', (req, res) => {
	res.status(500).json({
		status: 'successfull',
		msg: 'Get a user!',
	});
});

// create a user
route.post('/', Validator(userSchemaCreated), (req, res) => {
	res.status(500).json({
		status: 'successfull',
		msg: 'Create a user!',
	});
});

// update a user
route.put('/:id', Validator(userSchemaUpdated), (req, res) => {
	res.status(500).json({
		status: 'successfull',
		msg: 'Update a user!',
	});
});

// delete a user
route.delete('/:id', (req, res) => {
	res.status(500).json({
		status: 'successfull',
		msg: 'Delete a user!',
	});
});

export default route;
