import express from "express";
const router = express.Router();

import { getBlogsController } from "../controllers/getBlogsController.js";
import { getBlogByIdController } from "../controllers/getBlogByIdController.js";
import { addBlogController } from "../controllers/addBlogController.js";
import {
	createBlogPaylodValidationRules,
	validatePayload,
} from "../validators/validateNewBlogPayload.js";

router.get("/getBlogs", getBlogsController);
router.get("/getBlog/:id", getBlogByIdController);
router.post(
	"/createBlog",
	createBlogPaylodValidationRules(),
	validatePayload,
	addBlogController
);

export { router };
