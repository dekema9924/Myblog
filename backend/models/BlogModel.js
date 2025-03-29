
const mongoose = require('mongoose');
const { type } = require('os');
const { stringify } = require('querystring');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    category: {
        type: String 
    },
    date: {
        type: Date,
        default: Date.now 
    },
    summary: {
        type: String
    },
    image: {
        type: String
    },
    views: {
        type: Number
    },
    content: {
        type: String,
        required: true
    }

});


module.exports = mongoose.model('Blog', BlogSchema)