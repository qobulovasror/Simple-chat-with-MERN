const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {Users, validate} = require('../moduls/user');

router.post("/",async (req,res)=>{
    const {error}=validate(req.body);
    if(error)
        return res.status(400).send(error.details[0].message);
    let user = await Users.findOne({email: req.body.email});
    if(user)
        return res.status(400).send("Bu email oldin ro'yxatdan o'tgan");
    user = await Users.findOne({name: req.body.name});
    if(user)
        return res.status(400).send("Bu username oldin ro'yxatdan o'tgan");
    // user = new Users(_.pick(req.body, ['name','email','password','roling']));
    user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const salt = await bcrypt.genSalt();
    const hashPass = await bcrypt.hash(req.body.password,salt);
    user.password = hashPass;
    await user.save();
    const {name, _id} = user;
    res.header('authToken', _id).send({name});
});

module.exports = router;