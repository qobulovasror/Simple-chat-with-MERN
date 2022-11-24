const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Users, validateLogin } = require('../moduls/user');

router.get('/', async (req,res)=>{
    console.log(req.body)
    const {error} = validateLogin(req.body);
    if(error)
        return res.status(400).send(error.details[0].message+"11");
    let user = await Users.findOne({name: req.body.name});
    if(!user)
        return res.status(400).send("Username yoki parol xato ...");
    const result1 = await bcrypt.compare(req.body.password, user.password);
    if(!result1)
        return res.status(400).send("Username yoki parol xato ...");
    // const token = user.generateAuthToken();
    const {name, _id} = user;
    res.header('authToken',_id).send({name});
})

module.exports = router;