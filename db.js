const mongoose = require('mongoose')


  const Dbconnect = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoConnected.")
    } catch (error) {
        console.log("error in mongo server")
        
    }

}
module.exports = Dbconnect;
