import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./router/posts.js";
import db from "./db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const URI = process.env.MONGOOSE_URL;

db(URI);

app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

app.get("/", (req, res) => {
  res.json({ message: "success" });
});

app.use("/posts", posts);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
