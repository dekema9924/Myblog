const BlogDb = require('../../models/BlogModel')

module.exports =  TrendingBlogs=async(req,res)=>{
    await BlogDb.find({}).sort({views: -1}).limit(3)
    .then((result)=>{
        if(result) return res.status(200).json({trending: result})
    })

}