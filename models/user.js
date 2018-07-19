const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
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
    scores: { //array of scores and last element of the array is the most recent score
        type: Array
    },
    highScore: {
        type: Number
    }
});

userSchema.pre("save", async function(next){ //right before we run this document, run an async function
    try{
        if(!this.isModified("password")){//if you have not saved the password, dont' go and hash it again, if the password has not changed at all, don't mess with it
            return next();
        }
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();

    }catch(err){
        return next(err);
    }
});
userSchema.methods.comparePassword = async function(candidatePassword, next){
    try{
        let isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }
    catch(err){
        return next(err);
    }
}

const User = mongoose.model("User", userSchema);
module.exports = User;
