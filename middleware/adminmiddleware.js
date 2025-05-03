const adminMiddleware = (req,res,next)=>{
    if(req.user && req.user.role == 'admin'){
        next();
    }else{
        res.status(403).json({msg:"Access denied:only admin can access"});
    }
}

module.exports = adminMiddleware;