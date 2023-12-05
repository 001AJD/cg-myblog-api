import express from "express";
const router = express.Router();

import { getBlogsController } from "../controllers/getBlogsController.js";
import { getBlogByIdController } from "../controllers/getBlogByIdController.js";
import { addBlogController } from "../controllers/addBlogController.js";
import { addBlogCommentByIdController } from "../controllers/addCommentByIdController.js";
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

export { router };
