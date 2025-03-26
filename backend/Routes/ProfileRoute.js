

const express = require('express');
const ProfileRoute = express.Router();
const VerifyToken = require('../middleware/VerifyToken');


ProfileRoute.get('/', VerifyToken, (req, res) => {
    if(req.user){
        res.status(200).send(req.user)
    }
    else{
        res.status(401).send('Unauthorized')
    }
})


module.exports = ProfileRoute;