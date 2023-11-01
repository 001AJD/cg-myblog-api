import { addBlogDbFunction } from '../dbFunctions/addBlogDbFunction.js';
import { addLog } from '../helpers/utils.js';

const addBlogService = async(newBlog) => {
	
	return new Promise((resolve, reject)=>{
		addBlogDbFunction(newBlog)
			.then((result) => {
				resolve(result);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

export { addBlogService };