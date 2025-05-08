// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let ev = require("express-validator") ;

// Check All Data

exports.registerCheck = [

    ev.check("name").trim().notEmpty().withMessage("Name field is empty!") ,
    ev.check("username").trim().notEmpty().withMessage("username or email is empty").isEmail().withMessage("Invalid Email")   
    
]

// Exports Code :


