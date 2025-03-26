
const express = require('express')
const BlogRouter = express.Router()
const getAllBlogs = require('../Controllers/BlogController/GetAllBlogs')
const TrendingBlogs = require('../Controllers/BlogController/TrendingBlogs')

BlogRouter.get('/', getAllBlogs)
BlogRouter.get('/trending', TrendingBlogs)


module.exports = BlogRouter