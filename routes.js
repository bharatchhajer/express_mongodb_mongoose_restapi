const express = require("express");
const User = require("./user");

const router = express.Router();

router.post('/user', async (req,res) => {
    const {name, email, age} = req.body;
    console.log('name,email,age: ' + name + ' ' + email + ' ' + age);
    try{
        const user = new User({name:name,email: email, age:age});
        await user.save();
        res.send(user);
    }catch(error){
        console.error(error);
        res.status(500).send(error);
    }
});

router.get('/users', async (req,res) => {
    try{
        const users = await User.find();
        console.log("users: " + users);
        res.send(users);
    }catch(error){
        console.error(error);
        res.status(500).send(error);
    }
}); 

module.exports = router;