const { json } = require('express');
const User = require('../models/usermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const RegisterUser = async(req,res)=>{
    try {
        const {fullname,email,password,mobilenumber,role} = req.body;


        const existinguser = await User.findOne({email});
        if(existinguser){
             return res.status(400).json({msg:"user already exists with this mail"})
        }
        const newUser =  new User({fullname,email,password,mobilenumber,role})
        await newUser.save();
         return res.status(201).json({msg:"user registered Successfully"});
        
    } catch (error) {
        console.log(error);
         return res.status(500).json({msg:"internal error"})
        
        
    }
}









const LoginUser = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({msg:"user not found with this mail id"})
        }
        const ismatch = await bcrypt.compare(password,user.password);
        if(!ismatch){
             return res.status(401).json({msg:"password doesnot match"})
        }
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_KEY,
            { expiresIn: '1d' }
          );
          res.cookie('token', token, {
            httpOnly: true,
             // true in production (HTTPS)
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });
   return res.status(200).json({msg:"login Successfull",token})

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal server error" });
        
        
    }
}






























module.exports = {RegisterUser,LoginUser};