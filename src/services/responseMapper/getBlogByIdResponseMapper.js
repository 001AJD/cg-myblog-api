const getBlogByIdResponseMapper = (data) => {
	return {
		id: data.id,
		author: data.userId,
		title: data.title,
		body: data.body,
	};
};

export { getBlogByIdResponseMapper };
