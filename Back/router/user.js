import express from "express";
import {
  getAllUser,
  createUser,
  getUserByObject,
  deleteUser,
} from "../controller/users.js";

const userRouter = express.Router();

userRouter.route("/users").get(getAllUser);
userRouter.route("/signup").post(createUser);
userRouter.route("/login").get(getUserByObject);
userRouter.route("/users/:id").delete(deleteUser);

export default userRouter;
