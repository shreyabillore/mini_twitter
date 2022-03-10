const express = require("express");
const router = express.Router();

//Model import
const Message = require("../model/message");

// MIDDLEWARES
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const allMessages = async (_, res) => {
  try {
    const data = await Message.find({});
    res.send(data);
  } catch (error) {
    res.status(500).send("Server Error");
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
    res.status(500).send("Server Error");
  }
});

// get messages by username is is unique for every user
const messageById = async (req, res) => {
  const data = await Message.find({ "user.handle": req.params.id });
  res.send(data);
};

// Delete a single message
router.delete("/messages/:id", async (req, res) => {
  try {
    // Find the contact by id
    const message = await Message.findById(req.params.id);
    if (!message) return res.status(404).json({ msg: "Message not found" });

    await Message.findByIdAndRemove(req.params.id);
    res.json({ msg: "Message removed" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

router.get("/messages", allMessages);
router.get("/find/message/:id", messageById);

module.exports = router;
