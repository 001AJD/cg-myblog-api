import { body, validationResult } from 'express-validator';

const validatePayload = (req, res, next) => {
	const errors = validationResult(req);
	if(!errors.isEmpty())
	{
		res.status(400).json( {errors : errors.array()} ).end();
	}
	else
	{
		next();
	}
};

const createBlogPaylodValidationRules = () => {
	return [
		body('userId').exists().isString(),
		body('title').exists().isString(),
		body('body').exists().isString(),
	];
};

export { createBlogPaylodValidationRules , validatePayload };