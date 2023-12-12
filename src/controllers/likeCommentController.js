import { likeCommentService } from "../services/likeCommentService.js";

const likeCommentController = async (req, res) => {
  const blogId = req.params.blogid;
  const commentId = req.params.commentid;

  try {
    const response = await likeCommentService(blogId, commentId);
    res.status(response.code).end();
  } catch (err) {
    res.status(err.code).end();
  }
};

export { likeCommentController };
