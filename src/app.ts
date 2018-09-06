import * as express from "express";
import routes from "./routes";

const app: express.Application = express();
app.use("/api/", routes);

export default app;
