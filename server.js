const  express = require('express')
const Dbconnect = require("./db");
const dotenv = require('dotenv');
const authRoute = require('./routes/authroute');
const userRoute = require('./routes/userroute');
const postroute = require('./routes/postroute')
const cookieparser = require('cookie-parser');
const app = express()
const port = process.env.PORT || 5006

dotenv.config()
app.use(express.json());
app.use(cookieparser());


app.use("/",(req,res)=>{
    res.send("please contact admin for API Access")
})
app.use("/auth",authRoute);
app.use('/user',userRoute);
app.use("/post",postroute);










Dbconnect()
.then(()=>{
    app.listen(port,()=>{
        console.log("sever running with Db conection")
    })
})
.catch((error)=>{
    console.log("server error");
})
   

