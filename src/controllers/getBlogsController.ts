import { getBlogsService } from "../services/getBlogsService.ts";
import { Request, Response } from "express";

const getBlogsController = async (req: Request, res: Response) => {
	try {
		let response = await getBlogsService();
		res.status(200).send(response);
	} catch (err: any) {
		res.status(err.code).send(err);
	}
};

export { getBlogsController };
