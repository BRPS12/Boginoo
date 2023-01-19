import express from "express";
import {
  createLink,
  getAllLink,
  getLink,
  deleteLink,
} from "../controller/links.js";
import { checkToken } from "../middleware/middleware.js";
const linkRouter = express.Router();

linkRouter.post("/createlink", checkToken, createLink);
linkRouter.route("/").get(getAllLink);
linkRouter.route("/:id").get(getLink);
linkRouter.route("/:id").delete(deleteLink);

export default linkRouter;
