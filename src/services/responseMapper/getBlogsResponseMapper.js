const getBlogsResponseMapper = (data) => {
	let response = [];
	data.forEach((item) => {
		let object = {
			id: item.id,
			author: item.userId,
			title: item.title,
			body: item.body,
		};
		response.push(object);
	});
	return response;
};

export { getBlogsResponseMapper };
