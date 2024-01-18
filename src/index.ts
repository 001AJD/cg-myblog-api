import * as express from "express";
import { createConenction } from "./dbconfig/mongoConnection.ts";
import { validateApiKey } from "./middlewares/validateApiKey.ts";
import { router as blogsRouter } from "./routes/blogs.ts";

import * as helmet from "helmet";
import * as cors from "cors";
import * as functions from "firebase-functions";

const app = express.default();

// middlewares
app.use(express.json());
app.use(helmet.default());
app.use(cors.default());

createConenction(); // db connection

// routers
app.use(validateApiKey); // api-key validation middleware
app.use("/blogs", blogsRouter);

app.listen(3000, () => {
	console.log("listening on port 3000");
});

const api = functions.https.onRequest(app);

export { api };
