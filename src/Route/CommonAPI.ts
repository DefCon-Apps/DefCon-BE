import express, { Request, Response } from "express";

const commonRouter = express.Router();

commonRouter.post("/", async (req: Request, res: Response) => {
    res.send("Common API");
});