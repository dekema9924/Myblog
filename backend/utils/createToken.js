var jwt = require('jsonwebtoken');


 const GenerateToken = (user) => {
    return jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
}

module.exports = GenerateToken ;