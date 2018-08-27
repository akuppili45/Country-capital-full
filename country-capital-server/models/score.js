const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
    score: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});
const Score = mongoose.model("Score", scoreSchema);
module.exports = Score;
