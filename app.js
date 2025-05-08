// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let app = express() ;

let morgan = require("morgan") ;
let cors = require("cors") ;
let path = require("path") ;
let userRoute = require("./router/user.router");

require("dotenv").config() ;

let passport = require("passport") ;
let session = require("express-session") ;
let MongoStore = require('connect-mongo');
require("./config/passportLocal.config") ;
require("./config/passportGoogle.config") ;



// Connect With Server : 

app.use(express.urlencoded({extended:true})) ;
app.use(express.json()) ;
app.use(express.static("images"));
app.use(express.static("cssFiles"));
app.use(express.static("JS")) ;

app.use(cors()) ;
app.use(morgan("dev")) ;

// Passport-Authentication Code 

app.set("trust proxy" , 1) ;
app.use(session({
    secret : "keyboard cat" ,
    resave : false ,
    saveUninitialized : true ,
    store : MongoStore.create({

        mongoUrl : process.env.DB_URL ,
        collectionName : "sessions&cookies"

    })
})) ;

app.use(passport.initialize()) ;
app.use(passport.session()) ;


app.use(userRoute) ;

// Request-Response-Cycle : 

app.get("/" , function(req,res){

    res.status(200).sendFile(path.join(__dirname , "pages" , "index.html")) ;

}) ;

// handle the route error 

app.use(function(req,res,next){

    res.status(404).json({

        status : 404 ,
        message : "Page not found !!!"

    }) ;

}) ;

// handle the server error 

// app.use(function(err,req,res,next){

//     res.status(500).json({

//         status : 500 ,
//         message : "Server error !!!" ,
//         error : err.message 

//     });

// });

// Exports Code :

module.exports  = app ;
