import { addBlogCommentByIdService } from "../services/addBlogCommentByIdService.js";

const addBlogCommentByIdController = async (req, res) => {
	const blogId = req.params.blogid;
	const newComment = {
		userName: req.body.userName,
		comment: req.body.comment,
		date: new Date().toISOString(),
	};
	try {
		const response = await addBlogCommentByIdService(blogId, newComment);
		res.status(204).json(response);
	} catch (err) {
		res.status(err.code).json(err);
	}
};

export { addBlogCommentByIdController };
