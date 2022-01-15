const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    profile_pic: {
      type: String,
      required: true,
      default: "",
    },
    handle: {
      type: String,
      required: true,
    },
  },
  { versionKey: "_twitter_user" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
