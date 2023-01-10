import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    required: [true, "Name"],
    type: String,
  },
  email: {
    required: [false, "Email"],
    type: String,
  },
  password: {
    required: [true, "Password"],
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
