import { createurl } from "../models/createUrl";

const CreateUrl = async (req, res) => {
    const { shortUrl, url } = req.body;
    try {
        const newUrl = new createurl({
            shortUrl,
            url,
        });
        await newUrl.save();
        return res.status(200).json(newUrl);
    } catch (error) {
        if (error.code === 11000) {
            return res
                .status(400)
                .json({ error: "Short URL is already in use." });
        }
        return res.status(500).json(error);
    }
};

const getUrl = async (req, res) => {
    const { shortUrl } = req.params;
    try {
        const response: any = await createurl.findOne({ shortUrl: shortUrl });
        if (response) {
            await createurl.findOneAndUpdate(
                { shortUrl: shortUrl },
                { views: response.views + 1 }
            );
            return res.status(301).redirect(response.url);
        }
        return res.status(404).json({ error: "Url not found" });
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getAll = async (req, res) => {
    try {
        const response: any = await createurl.find();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export { CreateUrl, getUrl, getAll };
