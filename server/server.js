const express = require("express");
require("dotenv").config();
const app = express();

const connectDB = require("./config/db");
connectDB();

/**
 * DEFINE ROUTES
 */
app.use("/", require("./api/message"));
app.use("/", require("./api/user"));

// 4. listen to  port 5000

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server is up and running" + PORT));
