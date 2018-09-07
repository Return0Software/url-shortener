import * as mongoose from "mongoose";
import * as express from "express";
import * as bodyParser from "body-parser";

import routes from "./routes";
import Database from "./db";

// import urlModel from "./models/url"; // TODO: stupid ts doesn't let this work
const urlSchema: mongoose.Schema = new mongoose.Schema({
    originalUrl: String,
    urlCode: String,
    shortUrl: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const urlModel = mongoose.model("url", urlSchema);
export { urlModel };
const PORT: string | number = process.env.PORT || 8000;

// Connect to MongoDB
Database // also stupid lel

urlModel
    .find({})
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    });

// let u = new urlModel({
//     originalUrl: "test1"
// });

// u.save()
//     .then(doc => {
//         console.log(doc)
//     })
//     .catch(err => {
//         console.error(err)
//     });


const app: express.Application = express();

// Middleware
app.use(bodyParser.json());
app.use(function(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-type,Accept,x-access-token,X-Key"
    );

    if (req.method == "OPTIONS") {
        res.status(200).end();
    } else {
        next();
    }
});

app.use("/s/", routes);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
