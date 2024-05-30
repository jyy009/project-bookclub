import cors from "cors";
import express from "express";
import expressListEndpoints from "express-list-endpoints";
import usersRoutes from "./routes/users.js";
import wishlistRoutes from "./routes/wishlist.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", usersRoutes);
app.use("/", wishlistRoutes);

app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json(endpoints);
});

export default app;
