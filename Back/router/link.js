import express from "express";
import { createLink, getAllLink, getLink } from "../controller/links.js";

const linkRouter = express.Router();

linkRouter.route("/createlink").post(createLink);
linkRouter.route("/").get(getAllLink);
linkRouter.route("/:link").get(getLink);

export default linkRouter;
