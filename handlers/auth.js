const db = require("../models");
const jwt = require('jsonwebtoken');

exports.signin = async function(req, res, next){
    try{
        let user = await db.User.findOne({
           email: req.body.email 
        });
        let { id, username, profileImageUrl } = user;
        const shouldLogin = await user.comparePassword(req.body.password);
        if(shouldLogin){
            let token = jwt.sign({
                id,
                username,
                profileImageUrl
            }, process.env.SECRET_KEY);
            return res.status(200).json({
                id,
                username,
                profileImageUrl, 
                token
            });
        } else{
            return next({status: 400, message: "Invalid username/password"});
        }
      } catch(err){
        err.message = "Invalid username/password";
        return next({status: 400, message: err.message});
      }
};

exports.signup = async function(req, res, next){
    try{
        //create a user
        let user = await db.User.create(req.body); //forgot to put await here
        //console.log(user.id);
        console.log(user);
        console.log(user._id);
        console.log(user.id);
        let { id, username, profileImageUrl } = user;
        let token = jwt.sign({ //creates a json web token for the inputted payload which is the object inside the sign
            id,
            username,
            profileImageUrl
        }, process.env.SECRET_KEY);
        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        });
        //create a token
    }catch(err){
       //see what kind of error
        if(err.code === 11000){
            err.message = "Sorry, that username is taken";
        }
        return next({
            status: 400,
            message: err.message
        });
       //if it is a certain kind of error, respond with username/password already taken
    }
};
