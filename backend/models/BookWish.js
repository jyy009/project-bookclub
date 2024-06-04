import mongoose from "mongoose";
import { wishlistDB } from "../config/databases.js";

// Schema
const bookWishSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 140,
  },
  hearts: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
});

// Model
const BookWish = wishlistDB.model("BookWish", bookWishSchema);

export default BookWish;
