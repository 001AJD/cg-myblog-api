import express from "express";
const router = express.Router();

import { getBlogsController } from "../controllers/getBlogsController.js";
import { getBlogByIdController } from "../controllers/getBlogByIdController.js";
import { addBlogController } from "../controllers/addBlogController.js";
import { addBlogCommentByIdController } from "../controllers/addCommentByIdController.js";
import { getCommentsByBlogIdController } from "../controllers/getCommentsByBlogIdController.js";
import { getFeaturedBlogsController } from "../controllers/getFeaturedBlogsController.js";

import {
  createGetCommentsByBlogIdValidationRules,
  validateGetCommentPayload,
} from "../validators/validateGetComenntByBlogId.js";
import {
  createBlogPaylodValidationRules,
  validatePayload,
} from "../validators/validateNewBlogPayload.js";

import {
  createNewCommentPayloadValidationRules,
  validateNewCommentPayload,
} from "../validators/validateNewCommentPayload.js";

router.get("/getblogs", getBlogsController);
router.get("/getblog/:id", getBlogByIdController);
router.get(
  "/getcomments/:blogid",
  createGetCommentsByBlogIdValidationRules(),
  validateGetCommentPayload,
  getCommentsByBlogIdController
);
router.post(
  "/createblog",
  createBlogPaylodValidationRules(),
  validatePayload,
  addBlogController
);

router.put(
  "/addcomment/:blogid",
  createNewCommentPayloadValidationRules(),
  validateNewCommentPayload,
  addBlogCommentByIdController
);

router.get("/getfeaturedblogs", getFeaturedBlogsController);

export { router };
