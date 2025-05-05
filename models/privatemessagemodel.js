const mongoose = require('mongoose');

const PrivateMessageschema = new mongoose.Schema({
    SenderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    ReceiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    message:{
        type:String,
        required:true,
        timestamp: { type: Date, default: Date.now }
    }
})

const privatemessage = mongoose.model('privatemessage',PrivateMessageschema);