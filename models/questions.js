const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true,
        unique: true
    },
    username: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImageUrl: {
        type: String
    },
    scores: [//array of objectIds of scores and last element of the array is the most recent score
        {
            type: Number,
            ref: "Score"
        }
    ]
});


const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
