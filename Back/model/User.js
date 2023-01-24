import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const UserSchema = new mongoose.Schema({
  name: {
    required: [true, "Name"],
    type: String,
    maxlength: [20, "Arail urt"],
  },
  email: {
    required: [false, "Email"],
    unique: [true, "Burtgeltei email baina"],
    type: String,
  },
  password: {
    required: [true, "Password"],
    type: String,
  },
});
UserSchema.path("name").validate((name) => {
  return !/[0-9]/.test(name);
}, "Neren dund too orj bolku");

UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.jwtGenerate = async function () {
  return jwt.sign({ id: this._id, username: this.username }, process.env.JWT, {
    expiresIn: "1d",
  });
};
const User = mongoose.model("User", UserSchema);

export default User;
