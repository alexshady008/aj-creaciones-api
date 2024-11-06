import Joi from 'joi';

export const userSchemaCreated = Joi.object({
	username: Joi.string().alphanum().min(3).max(20).required(),
	email: Joi.string().email().required(),
	password: Joi.string().alphanum().min(3).max(20).required(),
	avatar: Joi.string(),
	role: Joi.string(),
	orders: Joi.number().integer(),
});

export const userSchemaUpdated = Joi.object({
	username: Joi.string().alphanum().min(3).max(20),
	email: Joi.string().email(),
	password: Joi.string().alphanum().min(3).max(20),
	avatar: Joi.string(),
	role: Joi.string(),
	orders: Joi.number().integer(),
});
