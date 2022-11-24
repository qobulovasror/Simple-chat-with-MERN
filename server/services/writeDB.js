const {Messages, validate} = require('../moduls/message');

const writeDB = async (msg, username, time)=>{
    const res = {msg, username, time}
    const {error} = validate(res);
    if(error)
        return error.details[0].message;
    let message = new Messages(res);
    await message.save();
    return;
}

const lastFiftyMsg = async (limit)=>{
    const message = await Messages.find().sort('-createdAt').limit(limit);
    return message;
}

exports.writeDB = lastFiftyMsg;
exports.writeDB = writeDB;