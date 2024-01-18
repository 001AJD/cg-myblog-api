import { Schema, model, Document } from "mongoose";

interface Comment {
	userName: string;
	comment: string;
	date: Date;
}

interface Iblog extends Document {
	userId: string;
	title: string;
	body: string;
}

const blogsSchema: Schema = new Schema(
	{
		userId: String,
		title: String,
		body: String,
		comments: [
			{
				userName: String,
				comment: String,
				date: Date,
			},
		],
	},
	{ versionKey: false }
);

const blogs = model<Iblog>("blogs", blogsSchema, "blogs");
export { blogs };
