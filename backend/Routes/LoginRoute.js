const express = require('express');
const LoginRoute = express.Router();
const LoginController = require('../Controllers/Login')
const RegisterController = require('../Controllers/Register')



LoginRoute.get('/', LoginController)
LoginRoute.post('/register', RegisterController)


module.exports = LoginRoute;
