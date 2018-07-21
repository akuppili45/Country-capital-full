const express = require('express');
const router = express.Router();
const { getQuestions } = require('../handlers/questions');
router.get("/", getQuestions);
module.exports = router;
