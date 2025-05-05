const  express = require('express')
const Dbconnect = require("./db");
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const authRoute = require('./routes/authroute');
const userRoute = require('./routes/userroute');
const { Server } = require('socket.io');
const postroute = require('./routes/postroute')
const adminroute = require('./routes/adminroutes')
const cookieparser = require('cookie-parser');
const openairoute = require('./routes/openairoute');
const app = express()
const port = process.env.PORT || 5006
dotenv.config()
app.use(express.json());
app.use(cookieparser());
app.use(cors());




const server = http.createServer(app);

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
    message: "Too many requests from this IP, please try again after 15 minutes",
    standardHeaders: true, 
    legacyHeaders: false, 
});
const io = new Server(server, {
    cors: {
      origin: "*",  // adjust in production
      methods: ["GET", "POST"]
    }
  });
io.on('connection', (socket) => {
    console.log(' WebSocket client connected:', socket.id);
  
    // Handle custom events
    socket.on('custom_event', (data) => {
      console.log(' Received custom_event:', data);
      
      // Broadcast to all other sockets
      socket.broadcast.emit('custom_event', data);
    });
  
    // Handle disconnect
    socket.on('disconnect', () => {
      console.log('❌ Client disconnected:', socket.id);
    });
  });
  

app.use(apiLimiter);
app.use("/auth",authRoute);
app.use('/user',userRoute);
app.use("/post",postroute);
app.use('/admin',adminroute);
app.use('/openai',openairoute);










Dbconnect()
.then(()=>{
    server.listen(port,()=>{
        console.log("sever running with Db conection")
    })
})
.catch((error)=>{
    console.log("server error");
})
   

