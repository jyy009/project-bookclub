import bcrypt from "bcrypt";
import mongoose from "../config/databases.js";

const { Schema, model } = mongoose;

// Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    default: () => bcrypt.genSaltSync(),
  },
});

// Model
const User = model("User", userSchema);

export default User;
