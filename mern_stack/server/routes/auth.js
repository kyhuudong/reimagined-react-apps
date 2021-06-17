const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
// @route POST api/auth/register
// @desc Register user
// @access Public

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Invalid username or password" });

  try {
    const user = await User.findOne({ username });

    if (user)
      return res
        .status(400)
        .json({ success: false, message: "The username is already exist" });

    const hashedPassword = await argon2.hash(password);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.SECRET_KEY
    );

    res.json({
      success: true,
      message: "Register successfully",
      accessToken,
      newUser,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Missing username or password" });

  try {
    const user = await User.findOne({ username });

    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Username or password are wrong" });

    const passwordValid = await argon2.verify(user.password, password);

    if (!passwordValid)
      return res
        .status(400)
        .json({ success: false, message: "Username or password are wrong" });

    const accessToken = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);

    res.json({ success: true, message: "Login successfully", accessToken });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
