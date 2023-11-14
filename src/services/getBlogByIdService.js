import { getBlogByIdDbFunction } from "../dbFunctions/getBlogByIdDbFunction.js";
import { getBlogByIdResponseMapper } from "./responseMapper/getBlogByIdResponseMapper.js";
import { addLog } from "../helpers/utils.js";

const getBlogByIdService = async (blogId) => {
	return new Promise((resolve, reject) => {
		getBlogByIdDbFunction(blogId)
			.then((result) => {
				resolve(getBlogByIdResponseMapper(result));
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export { getBlogByIdService };
