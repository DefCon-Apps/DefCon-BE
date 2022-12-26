import express, { Request, Response } from "express";

const projectRouter = express.Router();

projectRouter.post("/", async (req: Request, res: Response) => {
    res.send("Project API");
});