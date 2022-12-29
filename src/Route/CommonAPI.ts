import express, { Request, Response } from "express";

import { API_DATA } from "../Util/DataClass";
import * as FirebaseUtil from "../Util/FirebaseUtil";

const commonRouter = express.Router();

commonRouter.get("/", (req: Request, res: Response) => {
    res.send("Common API");
});

commonRouter.post("/getMainEvent", async (req: Request, res: Response) => {
    const API_RESULT_DATA: API_DATA = await FirebaseUtil.getMainEvent();

    res.send(API_RESULT_DATA);
});

export default commonRouter;