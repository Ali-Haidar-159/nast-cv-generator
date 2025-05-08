// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let mongoose = require("mongoose") ;

let chalk = require("chalk") ;
const { errorMonitor } = require("events");
require("dotenv").config() ;

// Connect The DataBase With Server :  

let DB_URL = process.env.DB_URL ;
let consoleDesign = chalk.bgGreen ;

async function connectDB ()
{
    try
    {

        await mongoose.connect(DB_URL) ;
        console.log(consoleDesign(`Database in connected successfully . `)) ;

    }   
    catch(error)
    {
        console.log({

            message : "Database is not connected !" ,
            error : error.message 

        }) ;
        process.exit(1) ;
    }
}

// Exports Code :

module.exports = connectDB ;
