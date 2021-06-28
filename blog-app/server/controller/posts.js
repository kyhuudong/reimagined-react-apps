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
<<<<<<< HEAD
    const post= await Post.findByIdAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );

    return res.json({ success: true, message: "Updated succesfully", post });
=======
    const post = await Post.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });

    return res.json({
      success: true,
      message: "Updated succesfully",
      post,
      req: req.body,
    });
>>>>>>> 83bde349304e418d0aa9fce85be117c970d2ac99
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Cant update post" });
  }
};
export const deletePost = async (req, res) => {
  try {
<<<<<<< HEAD
    const post= await Post.findByIdAndDelete(req.body);

=======
    const post = await Post.findOneAndDelete(req.body, {
      returnOriginal: false,
    });
>>>>>>> 83bde349304e418d0aa9fce85be117c970d2ac99
    res.status(200).json({
      success: true,
      message: "Delete successfully",
      post,
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
      id: req.body._id,
    });
  }
};
