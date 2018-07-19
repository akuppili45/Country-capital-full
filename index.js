require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');
const PORT = 8081;
const authRoutes = require('./routes/auth');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/api/auth", authRoutes);
//app.use("/", questionRoutes);
//errors
app.use(function(req, res, next){//next: move to the next piece of middeware
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});
app.use(errorHandler);
app.listen(PORT, function(){
    console.log(`Server is starting on ${PORT}`);
});


