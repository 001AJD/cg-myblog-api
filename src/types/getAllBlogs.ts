import { ObjectId } from "mongoose";

interface Iresponse {
	id: ObjectId;
	author: string;
	title: string;
	body: string;
}

interface IDBResponse {
	_id: ObjectId;
	userId: string;
	title: string;
	body: string;
}

export { Iresponse, IDBResponse };
