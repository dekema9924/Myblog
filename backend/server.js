
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const LoginRoute = require('./Routes/LoginRoute');
const mongooseConfig = require('./config/mongoose');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', LoginRoute);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})