const express = require("express");
const router = express.Router({mergeParams: true});
const { getQuestions } = require('../handlers/questions');
// router.route('/').get(getAllUsers);
router.route('/').get(getQuestions)
module.exports = router;
