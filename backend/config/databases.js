import mongoose from "mongoose";

const usersMongoUrl =
  process.env.USERS_MONGO_URL || "mongodb://localhost/OMC-users";
const wishlistMongoUrl =
  process.env.WISHLIST_MONGO_URL || "mongodb://localhost/OMC-wishlist";

const usersDB = mongoose.createConnection(usersMongoUrl);
const wishlistDB = mongoose.createConnection(wishlistMongoUrl);
mongoose.Promise = Promise;

export { usersDB, wishlistDB };
