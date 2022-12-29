import express, { Request, Response } from "express";
import {API_DATA} from "../Util/DataClass";
import * as FirebaseUtil from "../Util/FirebaseUtil";

const memberRouter = express.Router();

memberRouter.get("/", (req: Request, res: Response) => {
    res.send("Member API");
});

memberRouter.post("/getList", async (req: Request, res: Response) => {
    const API_RESULT_DATA: API_DATA = await FirebaseUtil.getMemberList();

    res.send(API_RESULT_DATA);
});

memberRouter.post("/getData", (req: Request, res: Response) => {
    res.send("Get Specific Member Data");
});

export default memberRouter;