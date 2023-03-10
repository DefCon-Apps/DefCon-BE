import express, { Request, Response } from "express";

import { API_DATA } from "../Util/DataClass";
import * as FirebaseUtil from "../Util/FirebaseUtil";

const projectRouter = express.Router();

projectRouter.post("/getList", async (req: Request, res: Response) => {
    const API_RESULT_DATA: API_DATA = await FirebaseUtil.getProjectList();

    res.send(API_RESULT_DATA);
});

projectRouter.post("/getData", async (req: Request, res: Response) => {
    const PROJECT_ID: string = req.body.PROJECT_ID;
    const API_RESULT_DATA: API_DATA = await FirebaseUtil.getProjectData(PROJECT_ID);

    res.send(API_RESULT_DATA);
});

export default projectRouter;