import { blogs } from "../models/blogs.js";

const getCommentsByBlogIdDbFunction = (blogId) => {
	const filter = { _id: blogId };
	const projection = { _id: 0, comments: 1 };
	//will need pagination in future when comments list grows
	return new Promise((resolve, reject) => {
		blogs
			.findOne(filter, projection)
			.then((dbResponse) => {
				if (dbResponse) {
					resolve(dbResponse);
				} else {
					reject({
						error: "No blog found with given blog id",
						code: "404",
					});
				}
			})
			.catch((err) => {
				reject({
					error: err,
					code: 500,
				});
			});
	});
};

export { getCommentsByBlogIdDbFunction };
