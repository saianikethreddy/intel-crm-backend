
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


const UserSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    },mobilenumber:{
        type:Number,
        required:true,
    },role:{
        type:String,
        enum:['admin','member'],
        default:'member'
    },
},{timestamps:true});



UserSchema.pre('save', async function (next) {
    try {
      // Only hash if password is new or changed
      if (!this.isModified('password')) return next();
  
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (err) {
      return next(err);
    }
  });


const User = mongoose.model('user',UserSchema);
module.exports = User;