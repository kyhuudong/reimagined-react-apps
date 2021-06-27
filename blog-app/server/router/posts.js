import express from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  deletePostAll,
} from "../controller/posts.js";
const Router = express.Router();

Router.get("/", getPosts);
Router.post("/", createPost);
Router.put("/update", updatePost);
Router.delete("/delete", deletePost);
Router.delete("/all", deletePostAll);

export default Router;
