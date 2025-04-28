const Post = require('../models/postmodel');


const CreatePost = async(req,res)=>{
    try{
        const userId = req.user.userId;
        const {title,content} = req.body;

        if(req.user.role !== 'admin'){
            return res.status(403).json({msg:"only admin can post "});

        }
        const Newpost = new Post({title,content,createdby:userId})
         await Newpost.save();
         return res.status(201).json({msg:"posted successfully"});
    }catch(error){
        console.log(error);
        return res.status(500).json({msg:"internal error"});

    }

}

const GetAllPosts = async(req,res)=>{
    try {
        const userId = req.user.userId
        const getpost = await Post.find();
        return res.status(200).json(getpost);
    } catch (error) {
        return res.status(500).json({msg:"internal error"});
        
    }
}

module.exports = {CreatePost,GetAllPosts};