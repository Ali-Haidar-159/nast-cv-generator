// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let nodemailer = require("nodemailer") ;
let fs = require("fs") ;
let path = require("path") ;

// Code To Send Email : 

function sendingEmail (username)
{
    let transportDetails = {

        secure : true ,
        host: "smtp.gmail.com",
        port: 465,
        auth: {
        user: "alihaidar379227@gmail.com",
        pass: "fchyefgvycifynoh"
        }
    
    }

    let template = fs.readFileSync(path.join(__dirname , ".." , "pages" , "email.html"), "utf8")
    // let finalHtml = template.replace("{{username}}", user.name);
    
    let emailDetails = {
    
        from : "'NAST CV' <alihaidar379227@gmail.com>" ,
        to : username  ,
        subject : "Registration completion email" ,
        // html: finalHtml
        html: template 

        // text : "Your registration is complete . you can use this website to make your dream website"
    
    }
    
    let transporter = nodemailer.createTransport(transportDetails) ;
            
        async function sendingEmailUser()
        {
            try
            {
                let mail = await transporter.sendMail(emailDetails) ;
                console.log("Email Send") ;
            }
            catch(err)
            {
                console.log({
    
                    message : "There is an error to sending Email !!!" ,
                    error : err.message 
    
            });
        }
    }

    sendingEmailUser() ;

}

// Exports Code :

module.exports = sendingEmail ;
