const express = require("express");
const router = express.Router();

// MIDDLEWARES
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//Model import

const User = require("../model/user");

const allUsers = async (_, res) => {
  console.log("Message data get block:");

  try {
    const data = await User.find({});
    console.log("Users data is", data);
    res.send(data);
  } catch (error) {
    console.log("Error is :", error.message);
  }
};

// to get random user

const randomUser = async (_, res) => {
  console.log("rnadom user data get block:");

  try {
    const data = await User.aggregate([{ $sample: { size: 1 } }]);
    console.log("Users data is", data);
    res.send(data);
  } catch (error) {
    console.log("Error is :", error.message);
  }
};

router.get("/users", allUsers);
router.get("/me", randomUser);

module.exports = router;
