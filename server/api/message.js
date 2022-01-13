const express = require("express");
const router = express.Router();

// MIDDLEWARES
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//Model import

const Message = require("../model/message");

const allMessages = async (req, res) => {
  console.log("Message data get block:");

  try {
    const data = await Message.find({});

    console.log("Message data is", data);
    res.send(data);
  } catch (error) {
    console.log("Error is :", error.message);
  }
};

// Add a single message
router.post("/", async (req, res) => {
  const { text, user, date, img_url, link_url } = req.body;
  const { username, handle } = user;
  try {
    const newMessage = new Message({
      text,
      user: {
        username,
        handle,
      },
      date,
      img_url,
      link_url,
    });
    const message = await newMessage.save();
    res.json(message);
  } catch (err) {
    console.log(err);
  }
});

router.get("/messages", allMessages);

module.export = router;
