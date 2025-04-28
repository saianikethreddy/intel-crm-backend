const express = require('express');
const router = express.Router();
const {RegisterUser,LoginUser} = require('../controller/authcontroller');


router.post("/register",RegisterUser);
router.post("/Login",LoginUser);


module.exports = router;