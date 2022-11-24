const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

// message, username, time
const messageSchema = new mongoose.Schema({
    msg: { 
        type: String,
        required: true,
        minlength: 1, 
        maxlength: 300
    },
    username: {
        type: String,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    }
});

const Messages = mongoose.model("Messages",messageSchema,"messages");


function validate(resurs){
    const messageSchema = Joi.object({
        msg: Joi.string().required().min(1).max(300),
        username: Joi.string().required(),
        time: Joi.required()
    });
    return messageSchema.validate(resurs);
}

const lastFiftyMsg = async (limit)=>{
    const message = await Messages.find().sort('-createdAt').limit(limit);
    return message;
}

exports.lastFiftyMsg = lastFiftyMsg;
exports.Messages = Messages;
exports.validate = validate;
