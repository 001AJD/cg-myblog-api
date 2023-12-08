const getFeaturedBlogsResponseMapper = (data) => {
  const response = data.map((item) => {
    return {
      blogId: item._id,
      userName: item.userId,
      title: item.title,
      content: item.body,
    };
  });
  return response;
};

export { getFeaturedBlogsResponseMapper };
