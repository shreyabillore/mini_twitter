const express = require("express");
const router = express.Router();

// MIDDLEWARES
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//Model import
const User = require("../model/user");

const allUsers = async (_, res) => {
  try {
    const data = await User.find({});
    res.send(data);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

// to get random user

const randomUser = async (_, res) => {
  try {
    const data = await User.aggregate([{ $sample: { size: 1 } }]);
    res.send(data);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

router.get("/users", allUsers);
router.get("/me", randomUser);

module.exports = router;
