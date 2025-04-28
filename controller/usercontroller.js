const User = require('../models/usermodel');
const bcrypt = require('bcryptjs');


const getmyInfo = async(req,res)=>{
    try {
        const user = await User.findById(req.user.userId)
        if(!user){
            return res.status(404).json({ msg: 'User not found' });
        }
         res.json(user);
    } catch (error) {
        res.status(500).json({ msg: 'Internal server error' });
        
    }

    
}
const UpdateInfo = async(req,res)=>{
    try {
        const userId = req.user.userId;
        const {fullname,password} = req.body

        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({msg:"user not found"});
        }if(fullname){
            user.fullname = fullname
        }if(password){
            const salt = await bcrypt.genSalt(12);
            user.password = await bcrypt.hash(password,salt)
        }
        await user.save();
        return res.json({msg:"user updated successfully"});
        
    } catch (error) {
        console.log(error)
        return res.json({msg:"internal error"})
        
    }
}

module.exports = {getmyInfo,UpdateInfo};