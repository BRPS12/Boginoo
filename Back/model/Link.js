import mongoose from "mongoose";
import { nanoid } from "nanoid";

const LinkSchema = new mongoose.Schema({
  username: {
    required: [false, "Name"],
    type: String,
  },
  link: {
    required: [true, "Link"],
    type: String,
  },
  shortId: {
    type: String,
  },
});

LinkSchema.pre("save", function (next) {
  this.shortId = nanoid(4);
  next();
});

const Link = mongoose.model("Link", LinkSchema);

export default Link;
