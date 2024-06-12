import express, { response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";
import authenticateUser from "../authMiddleware";
const mongoose = require("mongoose");

const router = express.Router();

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
    if (!password || password.length < 8) {
      return res.status(400).json({
        success: false,
        errorType: "password",
        message: "Password must be at least 8 characters long",
      });
    }
    const salt = bcrypt.genSaltSync();
    const user = new User({
      name,
      username,
      email,
      password: bcrypt.hashSync(password, salt),
      address,
    });
    await user.save();
    res.status(201).json({
      success: true,
      userId: user._id,
      accessToken: user.accessToken,
      message: "User created",
    });
  } catch (error) {
    // Check if the error is due to a duplicate key (e.g., username or email)
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        errorType: "duplication",
        message: Object.keys(error.keyValue)[0],
      });
    }
    // For other types of errors, just send the error message
    return res.status(500).json({
      success: false,
      errorType: "general",
      message: error.message,
    });
  }
});

router.get("/users/membership", authenticateUser, (req, res) => {
  res.json({ isLoggedIn: true, userId: req.user._id });
});

router.post("/users/sessions", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.json({ userId: user._id, accessToken: user.accessToken });
    } else {
      return res.status(400).json({
        success: false,
        errorType: "login",
        message: "Login failed. Incorrect username or password",
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      errorType: "login",
      message: "Login failed. Incorrect username or password",
    });
  }
});

router.get("/users/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("Could not find user");
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Bad request, user not found",
    });
  }
});

router.patch("/users/:userId/update", async (req, res) => {
  const { userId } = req.params;
  const { address } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const updateAddress = await User.findByIdAndUpdate(
      userId,
      { address },
      { new: true }
    );
    res.json({ success: true, address: updateAddress.address });
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Could not update email",
    });
  }
});

router.delete("/users/delete/:userId", async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid user ID",
    });
  }
  try {
    console.log(req.params);

    const deletedUser = await User.findByIdAndDelete({ _id: userId });
    console.log(deletedUser);
    if (!deletedUser) {
      return res.status(400).json({
        success: false,
        message: "could not find user",
      });
    } else {
      res.status(200).json({
        success: true,
        message: `User with ID ${userId} has been deleted`,
      });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({
      success: false,
      response: error,
      message: "Could not delete username",
    });
  }
});

export default router;
