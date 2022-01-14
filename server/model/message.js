const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      maxlength: 144,
      unique: false,
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
        required: true,
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
  },
  { versionKey: "_twitter_message" }
);

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
