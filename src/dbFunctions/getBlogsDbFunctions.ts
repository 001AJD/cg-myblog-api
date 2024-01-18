import { blogs } from "../models/blogs.ts";

const getAllBlogsDbFunction = async () => {
	return new Promise((resolve, reject) => {
		const query = {};
		const projection = { _id: 1, userId: 1, title: 1, body: 1 };
		blogs
			.find(query, projection)
			.limit(10)
			.exec()
			.then((result) => {
				if (result.length > 0) {
					resolve(result);
				} else {
					reject({
						error: "no data found",
						code: 404,
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

export { getAllBlogsDbFunction };
