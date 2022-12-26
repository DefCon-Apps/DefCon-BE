import express, { Request, Response } from "express";

const projectRouter = express.Router();

projectRouter.get("/", (req: Request, res: Response) => {
    res.send("Project API");
});

export default projectRouter;