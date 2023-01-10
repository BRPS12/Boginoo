import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { port, MONGO_URI } from "./config.js";
import userRouter from "./router/user.js";
import linkRouter from "./router/link.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);

app.use("/links", linkRouter);

const connect = () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(MONGO_URI, {}).then(() => {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.error("Couldnt Connect");
    process.exit(1);
  }
};

app.listen(port, async () => {
  connect();
  console.log(`Server running at localhost:${port}`);
});
