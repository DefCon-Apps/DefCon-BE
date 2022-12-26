import express, { Request, Response } from "express";

const memberRouter = express.Router();

memberRouter.get("/", (req: Request, res: Response) => {
    res.send("Member API");
});

memberRouter.post("/getList", (req: Request, res: Response) => {
    res.send("Get Member List");
});

memberRouter.post("/getMemberData", (req: Request, res: Response) => {
    res.send("Get Specific Member Data");
});

export default memberRouter;