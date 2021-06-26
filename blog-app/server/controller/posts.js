import Post from "../models/Post.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({ success: true, posts });
  } catch (err) {
    console.log(err);
    return res.json(500).json({ success: false, message: "Cant get posts" });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();

    return res.json({ success: true, message: "Created successfully", post });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ success: false, message: "Cant create post" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const postUpdate = await Post.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    return res.json({ success: true, message: "Updated succesfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Cant update post" });
  }
};
export const deletePost = async (req, res) => {
  try {
    const postDelete = await Post.findByIdAndDelete(req.body);

    res.status(200).json({
      success: true,
      message: "Delete successfully",
      postDelete,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Cant delete post",
      err,
      req: req.body,
    });
  }
};
export const deletePostAll = async (req, res) => {
  try {
    const postDelete = await Post.remove({});

    res.status(200).json({
      success: true,
      message: "Delete all successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Cant delete post",
      err,
    });
  }
};
