import express from "express";
import {
  createLink,
  getAllLink,
  getLink,
  deleteLink,
} from "../controller/links.js";

const linkRouter = express.Router();

linkRouter.route("/createlink").post(createLink);
linkRouter.route("/").get(getAllLink);
linkRouter.route("/:id").get(getLink);
linkRouter.route("/:id").delete(deleteLink);

export default linkRouter;
