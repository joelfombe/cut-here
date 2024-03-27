import express from "express";
import { createurl } from "../models/createUrl";
import { CreateUrl, getAll, getUrl } from "../controllers/createUrl";

export const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World");
});

router.post("/createurl", CreateUrl);
router.get("/:shortUrl", getUrl);
router.get("/shorturl/all", getAll);
