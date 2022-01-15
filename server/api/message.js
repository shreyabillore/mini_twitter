const express = require("express");
const router = express.Router();

//Model import
const Message = require("../model/message");

// MIDDLEWARES
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

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
router.post("/messages", async (req, res) => {
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

// Delete a single message
router.delete("/messages/:id", async (req, res) => {
  try {
    // Find the contact by id
    const message = await Message.findById(req.params.id);
    if (!message) return res.status(404).json({ msg: "Message not found" });

    await Message.findByIdAndRemove(req.params.id);
    res.json({ msg: "Message removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/messages", allMessages);

module.exports = router;
