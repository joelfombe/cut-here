import { model, Schema } from "mongoose";

const createUrl = new Schema({
    shortUrl: String,
    url: String,
});

export const createurl = model("createUrl", createUrl);