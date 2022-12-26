import express, { Request, Response } from "express";

const memberRouter = express.Router();

memberRouter.post("/", async (req: Request, res: Response) => {
    res.send("Member API");
});

export default memberRouter;