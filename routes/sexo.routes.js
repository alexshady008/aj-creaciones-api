import express from 'express';
import { sexoSchemaCreated, sexoSchemaUpdated } from '../schema/sexo.schema.js';
import Validator from '../middleware/validator.js';
import {
	GetAllSexo,
	GetSexo,
	CreateSexo,
	UpdateSexo,
	DeleteSexo,
} from '../controllers/sexo.controller.js';

const route = express.Router();

// get all Sexo
route.get('/', GetAllSexo);

// get a sexo
route.get('/:id', GetSexo);

// create a sexo
route.post('/', Validator(sexoSchemaCreated), CreateSexo);

// update a sexo
route.put('/:id', Validator(sexoSchemaUpdated), UpdateSexo);

// delete a sexo
route.delete('/:id', DeleteSexo);

export default route;
