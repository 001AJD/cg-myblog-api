import { getAllBlogsDbFunction } from '../dbFunctions/getBlogsDbFunctions.js';
import { getBlogsResponseMapper } from './responseMapper/getBlogsResponseMapper.js';
import { addLog } from '../helpers/utils.js';

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