import express, { Request, Response } from "express";

const commonRouter = express.Router();

commonRouter.get("/", (req: Request, res: Response) => {
    res.send("Common API");
});