import { all } from "axios";
import express from "express";
import {
  getAllUser,
  createUser,
  getUserByObject,
  deleteUser,
  getUserById,
} from "../controller/users.js";
import { checkToken } from "../middleware/middleware.js";

const userRouter = express.Router();

userRouter.route("/").get(getAllUser);
userRouter.route("/signup").post(createUser);
userRouter.route("/login").post(getUserByObject).post(checkToken);
userRouter.route("/:id").delete(deleteUser).get(getUserById);

export default userRouter;
