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

userRouter.get("/", getAllUser);
userRouter.route("/signup").post(createUser);
userRouter.route("/login").post(getUserByObject);
userRouter.route("/:id").delete(deleteUser).get(getUserById);

export default userRouter;
