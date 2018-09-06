import { Request, Response, Router } from "express";

const routes: Router = Router();

routes.get("/hello", (req: Request, res: Response) => {
    console.log("Hello World");
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ a: 2 }));
});

export default routes;
