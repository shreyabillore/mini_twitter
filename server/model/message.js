const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
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
    default:
      "https://th.bing.com/th/id/OIP.sJhiNQZoqAiaGJusJ_M37wHaHa?pid=ImgDet&rs=1",
  },
  link_url: {
    type: String,
    required: false,
  },
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
