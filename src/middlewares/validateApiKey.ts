import dotenv from "dotenv";
dotenv.config();
const validateApiKey = (req: Request, res: Response, next: () => void) => {
	if (req.get("api-key") === process.env.API_KEY) {
		next();
	} else {
		res.status(403).end();
	}
};

export { validateApiKey };
