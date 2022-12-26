import express, { Request, Response } from "express";
import memberRouter from "./MemberAPI";

const projectRouter = express.Router();

projectRouter.get("/", (req: Request, res: Response) => {
    res.send("Project API");
});

memberRouter.post("/getData", (req: Request, res: Response) => {
    res.send("Get Project Data");
});

memberRouter.post("/getList", (req: Request, res: Response) => {
    res.send("Get Project List");
});

export default projectRouter;