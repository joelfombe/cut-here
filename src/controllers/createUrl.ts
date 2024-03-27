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
        return res.status(500).json({ error: error.message });
    }
};

const getUrl = async (req, res) => {
    const { shortUrl } = req.params;
    try {
        const resposne: any = await createurl.findOne({ shortUrl: shortUrl });
        console.log(resposne);
        if (resposne) {
            return res.status(301).redirect(resposne.url);
        }
        return res.status(404).json(resposne);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export { CreateUrl, getUrl };
