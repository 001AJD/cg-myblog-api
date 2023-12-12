import { getFeaturedBlogsService } from "../services/getFeaturedBlogsService.js";

const getFeaturedBlogsController = async (req, res) => {
	try {
		const response = await getFeaturedBlogsService();
		res.status(200).json(response);
	} catch (err) {
		res.status(err.code).json(err.error);
	}
};

export { getFeaturedBlogsController };
