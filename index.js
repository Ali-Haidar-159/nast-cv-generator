// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let app = require("./app") ;

let chalk = require("chalk") ;
const connectDB = require("./config/database.config");
require("dotenv").config() ;

// Connect With Server : 


let consoleDesign = chalk.bold.italic.bgRed.white ;
let portNumber = process.env.PORT || 5000 ;

app.listen(portNumber ,async function(){

    console.log(consoleDesign(`Server is running at http://localhost:${portNumber} ...`)) ;
    await connectDB() ;

}) ;

// Exports Code :


