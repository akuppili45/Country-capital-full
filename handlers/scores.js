const db = require('../models');
// /api/users/:id/scores
exports.addScore = async function(req, res, next){
    try{
        let newScore = await db.Score.create({
            score: req.body.score,
            user: req.params.id
        });
        let foundUser = await db.User.findById(req.params.id);
        foundUser.scores.push(newScore.score);
        //await foundUser.save();
        let foundScore = await db.Score.findById(newScore._id).populate("user", {
            username: true,
            profileImageUrl: true
        });
        return res.status(200).json(foundScore);

    }catch(err){
        return next(err);
    }
};
// /api/users/:id/scores/:score_id
// exports.getScore = async function(req, res, next){
//     try {
//         let score = await db.Score.findById(req.params.score_id);
//         return res.status(200).json(score);
//     } catch (err) {
//         return next(err);
//     }
// };
exports.getAllScores = async function(req, res, next){
    try {
        let scores = await db.Score.find({user: req.params.id});
        return res.status(200).json(scores);
    } catch (err) {
        return next(err);
    }
};
