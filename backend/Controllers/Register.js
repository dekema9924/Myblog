const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');


const RegisterController = async (req,res)=>{

    //check if user exists
    const findUser = await User.findOne({
        email: req.body.email
    })

    if(findUser) return res.status(400).json({ message: 'User already exists'})
        //hash password
        bcrypt.hash(req.body.password, 10, async function(err, hash) {
            // Store hash in your password DB.
            const newUser = new User({
                email: req.body.email,
                username: req.body.username,
                password: hash
            })
            await newUser.save();
            return res.status(200).json({
                message: 'User created'
        });
});


    
    




}


module.exports = RegisterController;