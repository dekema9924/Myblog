const User = require('../models/UserModel')
const bcrypt = require('bcryptjs');
const  GenerateToken  = require('../utils/createToken');


const LoginController = async (req, res) => {
    const findUser = await User.findOne({
        $or: [
            { username: { $regex: new RegExp(`^${req.body.username}$`, 'i') } },
            { email: { $regex: new RegExp(`^${req.body.email}$`, 'i') } }
        ]
    });

    if (!findUser) return res.status(400).json({message: 'Invalid username or email'});

    // Load hash from your password DB.
    bcrypt.compare(req.body.password, findUser.password, function (err, result) {
        if (!result) return res.status(400).json({message: 'Invalid password'});

        // Generate token
        let token = GenerateToken(findUser);
        console.log(token);

        // Send token as cookie
        res.cookie('token', token, {
            // httpOnly: true,  
            secure: true,  
            sameSite: "strict",
            expires: new Date(Date.now() + 60 * 60 * 1000)  // 1 hour
        });
        res.status(200).send('Login success');
        
    });



}


module.exports = LoginController;