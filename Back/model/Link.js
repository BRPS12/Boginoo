import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
  link: {
    required: [true, "Link"],
    type: String,
  },
});

const Link = mongoose.model("Link", LinkSchema);

export default Link;
