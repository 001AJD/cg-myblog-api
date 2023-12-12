import { getCommentsByBlogIdDbFunction } from "../dbFunctions/getCommentsByBlogIdDbFunction.js";

const getCommentsByBlogIdService = (blogId) => {
	return new Promise((resolve, reject) => {
		getCommentsByBlogIdDbFunction(blogId)
			.then((result) => {
				resolve(result);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export { getCommentsByBlogIdService };
