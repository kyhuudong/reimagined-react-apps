import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./router/posts.js";
import db from "./db.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", posts);

app.get("/", (req, res) => {
  res.json({ message: "success" });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
