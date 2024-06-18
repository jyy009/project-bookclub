import mongoose from "../config/databases.js";

const { Schema, model } = mongoose;

// Schema
const bookWishSchema = new Schema({
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
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  user: {
    type: String,
    required: true,
  },
  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

// Model
const BookWish = model("BookWish", bookWishSchema);

export default BookWish;
