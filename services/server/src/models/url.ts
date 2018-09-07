import * as mongoose from "mongoose";

interface URL extends mongoose.Schema {
    originalUrl: string,
    urlCode: string,
    shortUrl: string,
    createdAt: { },
    updatedAt: { }
};

const urlSchema: mongoose.Schema = new mongoose.Schema({
    originalUrl: String,
    urlCode: String,
    shortUrl: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const urlModel = mongoose.model("url", urlSchema);

export default urlModel;
