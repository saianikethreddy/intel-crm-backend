const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
},{timestamps:true});

const Post = mongoose.model('post',PostSchema);
module.exports = Post;