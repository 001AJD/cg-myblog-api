import { mongoose } from 'mongoose';
const Schema = mongoose.Schema;
const blogsSchema = new Schema({
	userId: String,
	title: String,
	body: String
}, { versionKey : false });

const blogs = mongoose.model('blogs',blogsSchema,'blogs');
export { blogs };