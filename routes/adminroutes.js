const express = require('express');
const router = express.Router();
const authmiddleware = require('../middleware/authmiddleware')
const adminmiddleware = require('../middleware/adminmiddleware');
const getdata = require('../controller/admincontroller')


router.get("/overview",authmiddleware,adminmiddleware,getdata);


module.exports = router;