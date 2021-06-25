import Post from "../models/Post.js";

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
