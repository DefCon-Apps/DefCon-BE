import express, { Request, Response } from "express";

const memberRouter = express.Router();

memberRouter.get("/", (req: Request, res: Response) => {
    res.send("Member API");
});

memberRouter.post("/getData", (req: Request, res: Response) => {
    res.send("Get Member Data");
});

memberRouter.post("/getList", (req: Request, res: Response) => {
    res.send("Get Member List");
});

export default memberRouter;