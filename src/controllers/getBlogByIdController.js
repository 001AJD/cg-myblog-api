import { getBlogByIdService } from "../services/getBlogByIdService.js";
import { addLog } from "../helpers/utils.js";

const getBlogByIdController = async (req, res) => {
	let blogId = req.params.id;
	try {
		let response = await getBlogByIdService(blogId);
		res.status(200).send(response);
	} catch (err) {
		res.status(err.code).send(err);
	}
};

export { getBlogByIdController };
