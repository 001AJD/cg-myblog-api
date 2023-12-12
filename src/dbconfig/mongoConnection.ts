import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const connectionString: string = process.env.MONGO_CONNECTION_STRING || "";

const createConenction = async () => {
	try {
		await mongoose.connect(connectionString);
		console.log("Connected to Database!");
	} catch (e: any) {
		console.error(e.toString());
	}
};

export { createConenction };
