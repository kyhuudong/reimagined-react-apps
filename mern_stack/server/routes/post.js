const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const Post = require("../models/Post");

router.get("/", verifyToken, async (req, res) => {
  try {
    const posts = await Post.find({ user: req.userId }).populate("user", [
      "username",
    ]);

    res.json({ success: true, posts });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.post("/", verifyToken, async (req, res) => {
  const { title, description, url, status } = req.body;

  if (!title)
    res.status(400).json({ success: false, message: "Title is required" });

  try {
    const newPost = new Post({
      title,
      description,
      url: url.startsWith("https://") ? url : `https://${url}`,
      status: status || "TO LEARN",
      user: req.userId,
    });

    await newPost.save();

    res.json({
      success: true,
      message: "Create post successfully",
      post: newPost,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.post("/:id", verifyToken, async (req, res) => {
  const { title, description, url, status } = req.body;

  if (!title)
    res.status(400).json({ success: false, message: "Title is required" });

  try {
    let updatedPost = {
      title,
      description,
      url: url.startsWith("https://") ? url : `https://${url}`,
      status: status || "TO LEARN",
    };

    const postUpdateCondition = { _id: req.params.id, user: req.userId };

    updatedPost = await Post.findOneAndUpdate(
      postUpdateCondition,
      updatedPost,
      { new: true }
    );

    if (!updatedPost)
      res.status(401).json({
        success: false,
        message: "Post not found or user not authorized",
      });

    res.json({
      success: true,
      message: "Update successfully",
      post: updatedPost,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deleteCondition = { _id: req.params.id, user: req.userId };
    const deletePost = await Post.findOneAndDelete(deleteCondition);

    if (!deletePost)
      res.status(401).json({
        success: false,
        message: "Post not found or user not authorized",
      });

    res.json({
      success: true,
      message: "deleted successfully",
      post: deletePost,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
