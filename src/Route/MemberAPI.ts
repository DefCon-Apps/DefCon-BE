import express, { Request, Response } from "express";

const memberRouter = express.Router();

memberRouter.get("/", (req: Request, res: Response) => {
    res.send("Member API");
});

export default memberRouter;