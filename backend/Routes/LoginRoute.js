const express = require('express');
const LoginRoute = express.Router();
const LoginController = require('../Controllers/Login')
const RegisterController = require('../Controllers/Register');
const VerifyToken = require('../middleware/VerifyToken');



LoginRoute.post('/login', LoginController)
LoginRoute.post('/register', RegisterController)
LoginRoute.get('/user', VerifyToken, (req, res) => {
    res.send(req.user);
    console.log(req.user)

})


module.exports = LoginRoute;
