
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const LoginRoute = require('./Routes/LoginRoute');
const mongooseConfig = require('./config/mongoose');
const ProfileRoute = require('./Routes/ProfileRoute');
const cors = require('cors');
const BlogRouter = require('./Routes/BlogRoute');




app.use(cors({
    origin: 'https://jzeko.netlify.app',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', LoginRoute);
app.use('/profile', ProfileRoute)
app.use('/blogs', BlogRouter)



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})