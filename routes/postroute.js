const express = require('express');
const router = express.Router();
const authmiddleware = require('../middleware/authmiddleware');
const {CreatePost,GetAllPosts} = require('../controller/postcontroller');


router.post("/adminpost",authmiddleware,CreatePost);
router.get("/allposts",authmiddleware,GetAllPosts);


module.exports = router;