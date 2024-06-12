import User from "./models/User";

const authenticateUser = async (req, res, next) => {
  try {
    const user = await User.findOne({
      accessToken: req.header("Authorization"),
    });
    if (user) {
      req.user = user;
      next();
    } else {
      res
        .status(401)
        .json({ success: false, message: "Unauthorized, user not found" });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Bad request, user not found",
      response: error,
    });
  }
};

export default authenticateUser;
