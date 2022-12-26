import express, { Request, Response } from "express";
import memberRouter from "./MemberAPI";

const projectRouter = express.Router();

projectRouter.get("/", (req: Request, res: Response) => {
    res.send("Project API");
});

memberRouter.post("/getList", (req: Request, res: Response) => {
    res.send("Get Project List");
});

memberRouter.post("/getProjectData", (req: Request, res: Response) => {
    res.send("Get Specific Project Data");
});

export default projectRouter;