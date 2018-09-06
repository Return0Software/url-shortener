import { Request, Response, Router } from "express";

const routes: Router = Router();

routes.get("/", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ a: 2}, undefined, 3));
});

export default routes;
