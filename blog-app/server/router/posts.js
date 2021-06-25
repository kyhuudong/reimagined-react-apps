import express from "express";
import { createPost, getPosts, updatePost, deletePost } from "../controller/posts.js";
const Router = express.Router();

Router.get("/", getPosts);
Router.post("/", createPost);
Router.put("/", updatePost);
Router.delete("/", deletePost);

export default Router;
