const express = require('express');
const LoginRoute = express.Router();
const LoginController = require('../Controllers/Login')
const RegisterController = require('../Controllers/Register');



LoginRoute.post('/login', LoginController)
LoginRoute.post('/register', RegisterController)


module.exports = LoginRoute;
