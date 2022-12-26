import express, {Request, Response} from "express";

import memberRouter from "./Route/MemberAPI";
import projectRouter from "./Route/ProjectAPI";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, World!");
});

app.use("/member", memberRouter);
app.use("/project", projectRouter);

app.listen(8080, () => {
    console.log("Server is Listening on Port 8080!");
});