import { getAllBlogsDbFunction } from "../dbFunctions/getBlogsDbFunctions.ts";
import { IDBResponse } from "../types/getAllBlogs.ts";
import { getBlogsResponseMapper } from "./responseMapper/getBlogsResponseMapper.js";

const getBlogsService = async () => {
	return new Promise((resolve, reject) => {
		getAllBlogsDbFunction()
			.then((result) => {
				resolve(getBlogsResponseMapper(result));
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export { getBlogsService };
