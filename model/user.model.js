// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let mongoose = require("mongoose") ;

// Creating The Schema : 

let userSchema = new mongoose.Schema({

        username : {
            type : String ,
            required : {
                value : true ,
                message : "Username or email should be required !!!"
            }
        } ,

        password : {
            type : String ,
            sparse : true 
        } ,

        googleId : {
            type : String ,
            sparse : true 
        } ,

        name : {
            type : String ,
            required : [true , "Name should be required !!!"]
        }

}) ;

// Creating The Collection Or Model 

let userCollection = mongoose.model("register-info" , userSchema) ;

// Exports Code :

module.exports = userCollection ;
