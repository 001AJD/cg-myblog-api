import { likeCommentDbFunction } from "../dbFunctions/updateCommentLikesDbFunction.js";

const likeCommentService = (blogId, commentId) => {
  return new Promise((resolve, reject) => {
    likeCommentDbFunction(blogId, commentId)
      .then(() => {
        resolve({
          code: 204,
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { likeCommentService };
