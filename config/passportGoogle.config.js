// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let passport = require("passport") ;
let GoogleStrategy = require("passport-google-oauth20").Strategy ;
let userCollection = require("../model/user.model") ;
require("dotenv").config() ;

// Passport-Google-Authentication Code :  

passport.use(new GoogleStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback"
}, 
    async function(accessToken, refreshToken, profile, cb){

        try
        {
            let user = await userCollection.findOne({googleId : profile.id}) ;

            if(!user)
            {
                let newUser = new userCollection({

                    name : profile.displayName ,
                    username : profile.emails[0].value ,
                    googleId : profile.id 

                }) ;

                await newUser.save() ;

                cb(null , newUser) ;
            }
            else
            {
                cb(null , user) ;
            }

        }
        catch(error)
        {
            cb(error , null) ;
        }
    }
)) ;


passport.serializeUser(function(user,done){

    return done(null , user.id) ;

}) ;

passport.deserializeUser(async function(id , done){

    try
    {

        let user = await userCollection.findById(id) ;
        return done (null , user) ;

    }
    catch(err)
    {
        done(err) ;
    }

})


// Exports Code :


