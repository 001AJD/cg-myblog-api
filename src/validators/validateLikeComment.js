import { query, validationResult } from "express-validator";

const validateLikeCommentPayload = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty) {
		res.status(400).json({ errors: errors.array() }).end();
	} else {
		next();
	}
};

const createValidationRulesLikeComment = () => {
	return [
		query("blogid").notEmpty().escape(),
		query("commentid").notEmpty().escape(),
	];
};

export { createValidationRulesLikeComment, validateLikeCommentPayload };
