const express = require('express');
const router = express.Router();
const {getmyInfo,UpdateInfo} = require('../controller/usercontroller');
const authmiddleware = require('../middleware/authmiddleware');



router.get("/me",authmiddleware,getmyInfo);
router.post("/update",authmiddleware,UpdateInfo);


module.exports = router;