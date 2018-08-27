const express = require("express");
const router = express.Router({mergeParams: true});

const { addScore, getAllScores } = require('../handlers/scores');
router.route('/').post(addScore);
router.route('/').get(getAllScores);
module.exports = router;
