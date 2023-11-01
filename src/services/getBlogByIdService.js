import { getBlogByIdDbFunction } from '../dbFunctions/getBlogByIdDbFunction.js';
import { getBlogsResponseMapper } from './responseMapper/getBlogsResponseMapper.js';
import { addLog } from '../helpers/utils.js';

const getBlogByIdService = async (blogId) => {
	return new Promise((resolve, reject) => {
		getBlogByIdDbFunction(blogId)
			.then((result) => {
				resolve(getBlogsResponseMapper([result]));
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export { getBlogByIdService };