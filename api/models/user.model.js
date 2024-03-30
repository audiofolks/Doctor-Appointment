import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requiured: true,
      unique: true,
    },
    email: {
      type: String,
      requiured: true,
      unique: true,
    },
    password: {
      type: String,
      requiured: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
