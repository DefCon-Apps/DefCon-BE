import express, { Request, Response } from "express";

const commonRouter = express.Router();

commonRouter.get("/", (req: Request, res: Response) => {
    res.send("Common API");
});

commonRouter.post("/getMainEvent", (req: Request, res: Response) => {
    res.send("Get Main Page Event");
});

export default commonRouter;