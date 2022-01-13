const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("User", UserSchema);
