import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User";

const router = express.Router();

const authenticateUser = async (req, res, next) => {
  const user = await User.findOne({ accessToken: req.header("Authorization") });
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).json({ loggedOut: true });
  }
};

router.get("/users", async (req, res) => {
  const allUsers = await User.find().exec();
  if (allUsers.length > 0) {
    res.json(allUsers);
  } else {
    res.status(404).send("No users found");
  }
});

router.post("/users", async (req, res) => {
  try {
    const { name, username, email, password, address } = req.body;
    const salt = bcrypt.genSaltSync();
    const user = new User({
      name,
      username,
      email,
      password: bcrypt.hashSync(password, salt),
      address,
    });
    await user.save();
    res.status(201).json({ userId: user._id, accessToken: user.accessToken });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not create user", errors: error.message });
  }
});

router.get("/users/membership", authenticateUser);
router.get("/users/membership", (req, res) => {
  res.json({ message: "Success: user found" });
});

router.post("/users/sessions", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    res.json({ userId: user._id, accessToken: user.accessToken });
  } else {
    res.json({ notFound: true });
  }
});

export default router;
