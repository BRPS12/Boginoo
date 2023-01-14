import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    required: [true, "Name"],
    type: String,
    maxlength: [20, "Arail urt"],
  },
  email: {
    required: [true, "Email"],
    unique: [true, "Burtgeltei email baina"],
    type: String,
  },
  password: {
    required: [true, "Password"],
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

UserSchema.path("name").validate((name) => {
  return !/[0-9]/.test(name);
}, "Neren dund too orj bolku");

export default User;
