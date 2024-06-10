import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/OMC";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

export default mongoose;
