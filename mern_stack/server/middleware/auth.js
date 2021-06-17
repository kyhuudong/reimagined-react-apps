const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    res.status(401).json({ success: false, message: "Access token not found" });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(403).json({ success: false, message: "Invalid token" });
  }
};

module.exports = verifyToken;
