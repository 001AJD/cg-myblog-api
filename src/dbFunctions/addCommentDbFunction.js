import { blogs } from "../models/blogs.js";

const addCommentDbFunction = (blogId, newComment) => {
	const filter = { _id: blogId };
	const updateBody = {
		$push: { comments: newComment },
	};
	return new Promise((resolve, reject) => {
		blogs
			.updateOne(filter, updateBody)
			.then((result) => {
				if (result.matchedCount === 1 && result.modifiedCount > 0) {
					resolve(result);
				} else {
					reject({
						code: 404,
						err: "No Blogs found with given id",
					});
				}
			})
			.catch((err) => {
				reject({
					code: 500,
					err,
				});
			});
	});
};

export { addCommentDbFunction };
