import express, { query, response } from "express";
import BookWish from "../models/BookWish";
import User from "../models/User";
import authenticateUser from "../authMiddleware";

const router = express.Router();

router.get("/wishlist", async (req, res) => {
  let page = parseInt(req.query.page, 10);
  if (isNaN(page) || page < 1) {
    page = 1;
  }
  const pageSize = parseInt(req.query.pageSize, 10) || 10;
  const sortField = req.query.sortField || "createdAt";
  const sortOrder = req.query.sortOrder === "asc" ? 1 : -1;
  const offset = (page - 1) * pageSize;

  try {
    const fullWishlist = await BookWish.find()
      .skip(offset)
      .limit(pageSize)
      .sort({ [sortField]: sortOrder })
      .exec();
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

router.post("/wishlist/like/:wishId/", authenticateUser, async (req, res) => {
  const { wishId } = req.params;
  const userId = req.user._id;

  try {
    const wish = await BookWish.findById(wishId);

    if (!wish) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    if (wish.likedBy.includes(userId)) {
      const reduceLike = await BookWish.findByIdAndUpdate(
        wishId,
        {
          $inc: { likes: -1 },
          $pull: { likedBy: userId },
        },
        { new: true }
      );

      res.json({
        success: true,
        likes: reduceLike.likes,
        message: "Success removing like.",
      });
    } else {
      const incrementLike = await BookWish.findByIdAndUpdate(
        wishId,
        {
          $inc: { likes: 1 },
          $push: { likedBy: userId },
        },
        { new: true }
      );

      res.json({
        success: true,
        likes: incrementLike.likes,
        message: "Success liking book.",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      response: error,
      message: "Could not like book",
    });
  }
});

export default router;
