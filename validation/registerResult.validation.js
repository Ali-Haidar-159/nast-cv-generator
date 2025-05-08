// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let ev = require("express-validator") ;

// Giving The Validation Result :

function givingValidationResult (req,res,next)
{

    let error = ev.validationResult(req) ;

    if(error.isEmpty())
    {
        next() ;
    }
    else
    {
        res.status(402).json({

            message : "Find the input validation error !!!" ,
            error : error.array() 

        }) ;
    }

}

// Exports Code :

module.exports = givingValidationResult ;
