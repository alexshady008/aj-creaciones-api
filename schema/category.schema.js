import Joi from 'joi';

export const categorySchemaCreated = Joi.object({
	name: Joi.string().min(3).max(20).required(),
	description: Joi.string().max(150).required(),
	img: Joi.string(),
});

export const categorySchemaUpdated = Joi.object({
	name: Joi.string().min(3).max(20),
	description: Joi.string().max(150),
	img: Joi.string(),
});
