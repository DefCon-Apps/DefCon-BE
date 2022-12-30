import express, { Request, Response } from "express";
import { API_DATA } from "../Util/DataClass";
import * as FirebaseUtil from "../Util/FirebaseUtil";

const memberRouter = express.Router();

memberRouter.post("/getList", async (req: Request, res: Response) => {
    const API_RESULT_DATA: API_DATA = await FirebaseUtil.getMemberList();

    res.send(API_RESULT_DATA);
});

memberRouter.post("/getData", async (req: Request, res: Response) => {
    const MEMBER_ID: string = req.body.MEMBER_ID;
    const API_RESULT_DATA: API_DATA = await FirebaseUtil.getMemberData(MEMBER_ID);

    res.send(API_RESULT_DATA);
});

export default memberRouter;