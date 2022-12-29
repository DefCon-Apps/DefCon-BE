import express, { Request, Response } from "express";

const projectRouter = express.Router();

projectRouter.post("/getList", (req: Request, res: Response) => {
    res.send("Get Project List");
});

projectRouter.post("/getProjectData", (req: Request, res: Response) => {
    res.send("Get Specific Project Data");
});

export default projectRouter;