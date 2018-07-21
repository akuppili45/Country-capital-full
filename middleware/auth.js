require('dotenv').load();
const jwt = require("jsonwebtoken");
//make sure user is logged in - Authentication
exports.loginRequired = function(req, res, next){
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function(err, payload){
            if(payload){
                return next();
            }
            else{
                return next({
                    status: 401,
                    message: "Please login first"
                });
            }
        });
    } catch (err) {
        return next({
            status: 401,
            message: "Please login first"
        });
    }
};

//make sure we get the correct user - Authorization
exports.ensureCorrectUser = function(req, res, next){
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function(err, payload){
            if(payload && payload.id === req.params.id){
                return next();
            }
            else{
                return next({
                    status: 401,
                    message: "Unauthorized"
                });
            }
        });
    } catch (err) {
        return next({
            status: 401,
            message: "Unauthorized"
        });
    }
};
