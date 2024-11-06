import express from 'express';
import {
	categorySchemaCreated,
	categorySchemaUpdated,
} from '../schema/category.schema.js';
import Validator from '../middleware/validator.js';
import {
	GetAllCategory,
	GetCategory,
	CreateCategory,
	UpdateCategory,
	DeleteCategory,
} from '../controllers/category.controllers.js';

const route = express.Router();

// get all categories
route.get('/', GetAllCategory);

// get a category
route.get('/:id', GetCategory);

// create a category
route.post('/', Validator(categorySchemaCreated), CreateCategory);

// update a category
route.put('/:id', Validator(categorySchemaUpdated), UpdateCategory);

// delete a category
route.delete('/:id', DeleteCategory);

export default route;
