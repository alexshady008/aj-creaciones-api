import express from 'express';
import {
	productSchemaCreated,
	productSchemaUpdated,
} from '../schema/product.schema.js';
import Validator from '../middleware/validator.js';
import {
	CreateProduct,
	GetAllProducts,
	GetProduct,
	UpdateProduct,
	DeletedProduct,
} from '../controllers/product.controller.js';
import multer from 'multer';

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/products');
	},
	filename: (req, file, cb) => {
		cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`);
	},
});
const upload = multer({ storage });

const route = express.Router();

// get all product
route.get('/', GetAllProducts);

// get a product
route.get('/:id', GetProduct);

// create a product
route.post(
	'/',
	upload.array('img'),
	Validator(productSchemaCreated),
	CreateProduct,
);

// update a product
route.put('/:id', Validator(productSchemaUpdated), UpdateProduct);

// delete a product
route.delete('/:id', DeletedProduct);

export default route;
