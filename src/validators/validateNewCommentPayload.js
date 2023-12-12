import { body, query, validationResult } from "express-validator";

const validateNewCommentPayload = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		next();
	} else {
		res.status(400).json({ errors: errors.array() }).end();
	}
};

const createNewCommentPayloadValidationRules = () => {
	const rules = [
		query("blogid").escape(),
		body("userName").exists().isString(),
		body("comment").exists().isString(),
	];
	return rules;
};

export { createNewCommentPayloadValidationRules, validateNewCommentPayload };
