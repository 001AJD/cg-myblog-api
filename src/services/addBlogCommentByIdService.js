import { addCommentDbFunction } from "../dbFunctions/addCommentDbFunction.js";

const addBlogCommentByIdService = async (blogId, newComment) => {
  return new Promise((resolve, reject) => {
    addCommentDbFunction(blogId, newComment)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { addBlogCommentByIdService };
