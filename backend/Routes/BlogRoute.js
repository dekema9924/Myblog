
const express = require('express')
const BlogRouter = express.Router()
const getAllBlogs = require('../Controllers/BlogController/getAllBlogs')
const TrendingBlogs = require('../Controllers/BlogController/TrendingBlogs')
const  getBlogById  = require('../Controllers/BlogController/GetbyId')

BlogRouter.get('/', getAllBlogs)
BlogRouter.get('/trending', TrendingBlogs)
BlogRouter.get('/:id', getBlogById)


module.exports = BlogRouter