import { getBlogsService } from "../services/getBlogsService.js";
import { addLog } from "../helpers/utils.js";

const getBlogsController = async (req,res) => {
	try
	{
		let response = await getBlogsService();
		res.status(200).send(response);
	}
	catch(err)
	{
		res.status(err.code).send(err);
	}
};

export { getBlogsController };