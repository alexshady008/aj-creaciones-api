import Joi from 'joi';

export const sexoSchemaCreated = Joi.object({
	name: Joi.string().alphanum().min(3).max(20).required(),
	description: Joi.string().max(150).required(),
	img: Joi.string(),
});

export const sexoSchemaUpdated = Joi.object({
	name: Joi.string().alphanum().min(3).max(20),
	description: Joi.string().max(150),
	img: Joi.string(),
});
