import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  contect: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    default: "User",
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
