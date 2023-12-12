import { blogs } from "../models/blogs.js";
import { addLog, addErrorLog } from "../helpers/utils.js";

const addBlogDbFunction = (newBlog) => {
	return new Promise((resolve, reject) => {
		blogs
			.create(newBlog)
			.then((result) => {
				resolve(result);
			})
			.catch((err) => {
				reject({
					error: err,
				});
			});
	});
};

export { addBlogDbFunction };
