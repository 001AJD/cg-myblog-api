import { Request, Response } from "express";
import { config } from "dotenv";
config();
const validateApiKey = (req: Request, res: Response, next: any) => {
	if (req.get("api-key") === process.env.API_KEY) {
		next();
	} else {
		res.status(403).end();
	}
};

export { validateApiKey };
