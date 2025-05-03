const  express = require('express')
const Dbconnect = require("./db");
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const authRoute = require('./routes/authroute');
const userRoute = require('./routes/userroute');
const postroute = require('./routes/postroute')
const adminroute = require('./routes/adminroutes')
const cookieparser = require('cookie-parser');
const app = express()
const port = process.env.PORT || 5006
dotenv.config()
app.use(express.json());
app.use(cookieparser());
app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000', // your frontend domain
    credentials: true               // allow cookies & tokens
}));




const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
    message: "Too many requests from this IP, please try again after 15 minutes",
    standardHeaders: true, 
    legacyHeaders: false, 
});

app.use(apiLimiter);
app.use("/auth",authRoute);
app.use('/user',userRoute);
app.use("/post",postroute);
app.use('/admin',adminroute);










Dbconnect()
.then(()=>{
    app.listen(port,()=>{
        console.log("sever running with Db conection")
    })
})
.catch((error)=>{
    console.log("server error");
})
   

