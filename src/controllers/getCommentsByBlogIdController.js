import { getCommentsByBlogIdService } from "../services/getCommentsByBlogIdService.js";

const getCommentsByBlogIdController = async (req, res) => {
  const blogId = req.params.blogid;
  try {
    let response = await getCommentsByBlogIdService(blogId);
    res.status(200).json(response);
  } catch (err) {
    res.status(err.code).json(err);
  }
};

export { getCommentsByBlogIdController };
