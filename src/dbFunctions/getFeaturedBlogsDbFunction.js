import { blogs } from "../models/blogs.js";

const getFeaturedBlogsDbFunction = () => {
  const query = [
    { $sample: { size: 3 } },
    { $project: { _id: 1, title: 1, userId: 1, body: 1 } },
  ];

  return new Promise((resolve, reject) => {
    blogs
      .aggregate(query)
      .then((result) => {
        if (result.length === 0) {
          reject({
            code: 404,
            error: "No Data found",
          });
        } else {
          resolve(result);
        }
      })
      .catch((err) => {
        reject({
          code: 500,
          error: err,
        });
      });
  });
};

export { getFeaturedBlogsDbFunction };
