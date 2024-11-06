import Joi from 'joi';

export const productSchemaCreated = Joi.object({
	name: Joi.string().min(3).max(20).required(),
	description: Joi.string().max(150).required(),
	price: Joi.number().required(),
	price2: Joi.number().required(),
	//img: Joi.array(),
	stock: Joi.number().integer(),
	category: Joi.string().required(),
	sexo: Joi.string().required(),
});

export const productSchemaUpdated = Joi.object({
	name: Joi.string().min(3).max(20),
	description: Joi.string().max(150),
	price: Joi.number(),
	price2: Joi.number(),
	//img: Joi.array(),
	stock: Joi.number().integer(),
	category: Joi.string(),
	sexo: Joi.string(),
});
