import { blogs } from '../models/blogs.js';

const getBlogByIdDbFunction = async (blogId) => {
	return new Promise((resolve, reject) => {
		const objectId = blogId;
		const projection =	{ _id: 0, userId: 1, title: 1, body: 1 };
		blogs.findById(objectId,projection)
			.exec()
			.then((result) => {
				if(result)
				{
					resolve(result);
				}
				else
				{
					reject({
						'error' : 'no data found',
						'code' : 404
					});
				}
			}).catch((err)=>{
				reject({
					'error' : err,
					'code' : 500
				});
			});
	}); 
};

export { getBlogByIdDbFunction };
