import express, {Request, Response} from "express";

import commonRouter from "./Route/CommonAPI";
import memberRouter from "./Route/MemberAPI";
import projectRouter from "./Route/ProjectAPI";

import * as FirebaseUtil from "./Util/FirebaseUtil";

const app = express();

FirebaseUtil.initFirebase();

app.use("/member", memberRouter);
app.use("/project", projectRouter);
app.use("/common", commonRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.listen(8080, () => {
    console.log("Server is Listening on Port 8080!");
});