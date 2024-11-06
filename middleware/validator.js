import Joi from 'joi';
import Boom from '@hapi/boom';

const Validator = (schema) => {
	return (req, res, next) => {
		const { error } = schema.validate(req.body);

		if (error) {
			const errorMsg = error.details[0].message;
			next(Boom.badRequest(errorMsg));
		}
		next();
	};
};

export default Validator;
