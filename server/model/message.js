const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    unique: true,
    maxlength: [144],
  },
  user: {
    type: Object,
    required: true,
    username: {
      type: String,
      required: true,
    },
    handle: {
      type: String,
    },
  },
  date: {
    required: true,
    type: Date,
    default: Date.now,
  },
  img_url: {
    type: String,
    required: false,
  },
  link_url: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Message", MessageSchema);
