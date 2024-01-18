import { IDBResponse, Iresponse } from "../../types/getAllBlogs.ts";

const getBlogsResponseMapper = (data: any[]) => {
	let response: Iresponse[];
	response = data.map((item) => {
		let object: Iresponse = {
			id: item._id,
			author: item.userId,
			title: item.title,
			body: item.body,
		};
		return object;
	});
	console.log(response);
	return response;
};

export { getBlogsResponseMapper };
