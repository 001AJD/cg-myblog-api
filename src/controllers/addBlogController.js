import { addBlogService } from "../services/addBlogService.js";
import { addLog } from "../helpers/utils.js";

const addBlogController = async (req,res) => {
	const newBlog = {
		userId : req.body.userId,
		title: req.body.title,
		body: req.body.body
	};
	try
	{
		const response =  await addBlogService(newBlog);
		res.status(201).json(response);
	}
	catch(err)
	{
		res.status(err.code).json(err);
	}
};

export { addBlogController };