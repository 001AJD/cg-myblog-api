import { blogs } from "../models/blogs.js";

const likeCommentDbFunction = (blogId, commentId) => {
  const filter = {
    _id: blogId,
    comments: {
      $elemMatch: {
        _id: commentId,
      },
    },
  };
  const updatePayload = {
    $inc: { "comments.$.likes": 1 },
  };
  return new Promise((resolve, reject) => {
    blogs
      .updateOne(filter, updatePayload)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject({
          code: 500,
          error: err,
        });
      });
  });
};

export { likeCommentDbFunction };
