import express, { response } from "express";
import BookWish from "../models/BookWish";

const router = express.Router();

router.get("/wishlist", async (req, res) => {
  try {
    const fullWishlist = await BookWish.find().sort({ createdAt: -1 }).exec();
    if (fullWishlist.length > 0) {
      res.json(fullWishlist);
    } else {
      res.status(404).send("No books found");
    }
  } catch (error) {
    res.status(500).send("Server error");
  }
});

router.post("/wishlist", async (req, res) => {
  try {
    const { title, author, message, user } = req.body;

    const bookWish = new BookWish({
      title,
      author,
      message,
      user,
    });
    await bookWish.save();
    res.status(201).json({
      success: true,
      response: bookWish,
      message: "Book posted to wishlist",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error.message,
      message: "Could not post to wishlist",
    });
  }
});

router.post("/wishlist/:wishId/like", async (req, res) => {
  const { wishId } = req.params;
  try {
    const wish = await BookWish.findById(wishId);

    if (!wish) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    const incrementLike = await BookWish.findByIdAndUpdate(
      wishId,
      { $inc: { likes: 1 } },
      { new: true }
    );

    res.json({ success: true, likes: incrementLike.likes });
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Could not like book",
    });
  }
});

export default router;