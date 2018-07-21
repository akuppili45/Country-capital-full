const express = require("express");
const router = express.Router({mergeParams: true});

const { addScore, getScore } = require('../handlers/scores');
router.route('/').post(addScore);
router.route('/:score_id').get(getScore);
module.exports = router;
