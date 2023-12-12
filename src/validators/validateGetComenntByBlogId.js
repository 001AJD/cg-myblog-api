import { query, validationResult } from "express-validator";

const validateGetCommentPayload = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		res.status(400).json({ errors: errors.array() }).end();
	} else {
		next();
	}
};

const createGetCommentsByBlogIdValidationRules = () => {
	return [query("blogid").escape()];
};

export { createGetCommentsByBlogIdValidationRules, validateGetCommentPayload };
