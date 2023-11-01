import express from 'express';
import { router as blogsRouter} from './routes/blogs.js';
import { createConenction } from './dbconfig/mongoConnection.js';
import { errorHandler } from './middlewares/errorHandler.js';
import helmet from 'helmet';
import cors from 'cors';
import * as functions from 'firebase-functions';

const app = express();

// middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());

createConenction(); // db connection

// routers
app.use('/blogs', blogsRouter);


app.listen(3000, ()=>{
	console.log('listening on port 3000');
});

exports.api = functions.https.onRequest(app);