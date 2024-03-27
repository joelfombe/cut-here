import express from "express";
import { connectDB } from "./config/mongoDB";
import { router } from "./routers/routers";

const app = express();
const PORT = 8000 || process.env.PORT;

app.use(express.json())
app.use(router)

connectDB();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
