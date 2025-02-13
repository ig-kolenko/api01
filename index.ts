/*
 * index.ts
 *
 * This program will demonstrate writing an Express REST API
 * and will fetch the first row of data in the database.csv file
 */

import express, { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';

const app: express.Application = express();	// new express app
const PORT: number = 4000;			// our listening port

// middleware for logging

app.use ((req: Request, res: Response, next: NextFunction) => {
	console.log (`${req.method} ${req.path}`);
	next();
});

// home route using app object

app.get ('/', (req: Request, res: Response) => {
	res.send ("Welcome to the Express.js TypeScript app!");
});

// router object for encapsulating routes

const deviceRouter = express.Router();

// middleware specific to this router

deviceRouter.use ((req: Request, res: Response, next: NextFunction) => {
	console.log ("Device router specific middleware");
	next();
});

// route defined on the deviceRouter

deviceRouter.get ('/devices', (req: Request, res: Response) => {
	res.send ("/devices endpoint reached");
});

// using the router

app.use (deviceRouter);

// start the server / listener

app.listen (PORT, () => {
	console.log (`Server is running on http://localhost:${PORT}`);
});

