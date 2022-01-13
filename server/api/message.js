const express = require('express');
const router = express.Router();  
  
// MIDDLEWARES
const bodyParser = require('body-parser');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}))

//Model import

const Message = require('../model/message') 

const allMessages = async(req,res) => {
    console.log('Message data get block:')

    try{
        const data = await Message.find({})
    
        console.log('Message data is', data)
        res.send(data)
    }
    catch(error){
        console.log('Error is :',error.message)
    }
}


router.get('/messages', allMessages)


module.export = router


