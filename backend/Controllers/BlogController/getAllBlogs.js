
const BlogDb = require('../../models/BlogModel')

module.exports =  getAllBlogs =async(req, res)=>{
    await BlogDb.find({}).then((result)=>{
        if(result.length == 0) return res.status(400).send('error fetching blogs')
            res.status(200).json({result: result})
    })
    
}