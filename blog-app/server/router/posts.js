import express from "express";
import { createPost, getPosts, updatePost } from "../controller/posts.js";
const Router = express.Router();

Router.get("/", getPosts);
Router.post("/", createPost);
Router.put("/", updatePost);

export default Router;
