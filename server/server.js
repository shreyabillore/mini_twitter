const express = require('express')
require('dotenv').config()
const app = express()


const connectDB = require('./config/db');
connectDB()


/**
 * DEFINE ROUTES
 */
 app.use('/twitter', require('./api/message.js'))



// 4. listen to  port 5000

let port = process.env.PORT ||8000;
app.listen(port, () => console.log('server is up and running' + port))

