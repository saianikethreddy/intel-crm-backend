const { json } = require('express');
const post = require('../models/postmodel')
const user = require('../models/usermodel')


const getoverViewData = async(req,res)=>{

    try {
        const totalusers = await user.countDocuments();
        const totalposts = await post.countDocuments();

        return res.json({
            totalposts,
            totalusers
        })
        
    } catch (error) {
        return res.status(500).json({msg:"internal error"});
        
    }
}

module.exports = getoverViewData;