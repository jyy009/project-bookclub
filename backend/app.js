import cors from "cors"
import express from "express"

import usersRoutes from "./routes/users.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", usersRoutes);

export default app;
