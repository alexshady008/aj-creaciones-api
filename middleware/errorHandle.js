import Boom from '@hapi/boom';

export const logError = (err, req, res, next) => {
	//console.error('Error:', err);
	next(err);
};

export const boomError = (err, req, res, next) => {
	if (err.isBoom) {
		const boomErr = err.output.payload;
		res.status(200).json({
			err: boomErr.error,
			message: boomErr.message,
		});
	} else next(err);
};

export const handleError = (err, req, res, next) => {
	res.status(200).json({
		err: 'Error',
		msg: err,
	});
};
