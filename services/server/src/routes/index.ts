import { Request, Response, Router } from "express";
import * as mongoose from "mongoose";
import * as validUrl from "valid-url";

import { generate as shortCode } from "../utils";
import { urlModel as UrlShorten } from "../index";

const routes: Router = Router();

routes.get("/:code", async (req, res) => {
    const urlCode = req.params.code;
    const item: any = await UrlShorten.findOne({ urlCode: urlCode });
    if (item) {
        return res.redirect(item.originalUrl);
    } else {
        return "error";
        // return res.redirect(constants.errorUrl);
    }
});

routes.post("/", async (req, res) => {
    const { shortBaseUrl, originalUrl } = req.body;

    if (validUrl.isUri(shortBaseUrl) == undefined)
        return res.status(404).json("Invalid Base Url format");

    const urlCode = shortCode();
    const updatedAt = new Date();

    if (validUrl.isUri(originalUrl)) {
        try {
            const item = await UrlShorten.findOne({ originalUrl: originalUrl });

            if (item) {
                res.status(200).json(item);
            } else {
                const shortUrl = shortBaseUrl + "/s/" + urlCode;
                const item = new UrlShorten({
                    originalUrl,
                    shortUrl,
                    urlCode,
                    updatedAt
                });
                await item.save();
                res.status(200).json({
                    originalUrl,
                    shortUrl,
                    urlCode,
                    updatedAt
                });
            }
        } catch (err) {
            res.status(401).json("Invalid User Id");
        }
    } else {
        return res.status(401).json("Invalid Original Url.");
    }
});

export default routes;
