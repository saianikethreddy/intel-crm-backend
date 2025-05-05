const express = require('express');

const router = express.Router();
const {ChatWithAI} = require('../controller/openaicontroller');


router.post('/message',ChatWithAI);

module.exports = router;