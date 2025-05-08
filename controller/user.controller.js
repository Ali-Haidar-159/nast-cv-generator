// initial code

"use strict";
console.clear();

// Starts The Main Code :

// Require All The Modules , Packages And Objects :

let path = require("path");
let bcrypt = require("bcrypt");
let userCollection = require("../model/user.model");
let sendingEmail = require("../config/sendingEmail.config");
let passport = require("passport");

// Controller Code :

//GET-POST register

let getRegister = function (req, res) {
  res
    .status(200)
    .sendFile(path.join(__dirname, "..", "pages", "register.html"));
};

let postRegister = function (req, res) {
  try {
    let { username, password, name } = req.body;

    let saltRounds = 10;

    bcrypt.hash(password, saltRounds, async function (err, hash) {
      let newUser = new userCollection({
        username,
        password: hash,
        name,
      });

      await newUser.save();

      sendingEmail(username);

      res.status(201).redirect("/get-started");
    });
  } catch (error) {
    res.status(402).json({
      message: "Find error to login !!!",
      error: error.message,
    });
  }
};

//GET-POST login

let getLogin = function (req, res) {
  res
    .status(200)
    .sendFile(path.join(__dirname, "..", "pages", "loginPage.html"));
};

//this postLogin controller is not used !!!

let postLogin = function (req, res) {
  passport.authenticate("local", {
    failureRedirect: "/plans",
    successRedirect: "/about",
  });
};

//GET-POST forget-password

let getForgetPass = function (req, res) {
  res
    .status(200)
    .sendFile(path.join(__dirname, "..", "pages", "forgetPass.html"));
};

let postForgetPass = function (req, res) {
  res.status(201).send("forget pass");
};

//Others router

let getAbout = function (req, res) {
  res.status(200).sendFile(path.join(__dirname, "..", "pages", "about.html"));
};

let getBenefits = function (req, res) {
  res
    .status(200)
    .sendFile(path.join(__dirname, "..", "pages", "benefits.html"));
};

let getGetStarted = function (req, res) {
  res
    .status(200)
    .sendFile(path.join(__dirname, "..", "pages", "getStartedPage.html"));
};

let getPlans = function (req, res) {
  res
    .status(200)
    .sendFile(path.join(__dirname, "..", "pages", "Plans-&-Pricing.html"));
};

let getSettings = function (req, res) {
  res
    .status(200)
    .sendFile(path.join(__dirname, "..", "pages", "settings.html"));
};


let getLogout = function(req,res){

  try
  {

      req.logout(function(err){

          if(err)
          {
              next(err) ;
          }
          else
          {
              res.status(200).redirect("/") ;
          }

      })

  }
  catch(err)
  {
      res.status(402).json({

          message : "Can not log out !!!"  ,
          error : err.message 

      })
  }

}

let getCoverLetter = function(req,res){

  res.status(200).sendFile(path.join(__dirname, "..", "pages", "coverLetter.html"));

}

let getJobTracker = function(req,res){

  res.status(200).sendFile(path.join(__dirname, "..", "pages", "jobTracker.html"));

}




// GET-POST templates

let getTemplate1 = function (req, res) {

  if(req.isAuthenticated())
  {
    res.status(200).sendFile(path.join(__dirname, "..", "pages", "templet1.html"));
  }
  else
  {
    res.redirect("/get-started") ;
  }

};

let postTemplate1 = function (req, res) {
  res.status(201).send("template - 1");
};

let getTemplate2 = function (req, res) {
  if(req.isAuthenticated())
    {
      res.status(200).sendFile(path.join(__dirname, "..", "pages", "templet2.html"));
    }
    else
    {
      res.redirect("/get-started") ;
    }
};

let postTemplate2 = function (req, res) {
  res.status(201).send("template - 2");
};

let getTemplate3 = function (req, res) {
  if(req.isAuthenticated())
    {
      res.status(200).sendFile(path.join(__dirname, "..", "pages", "templet3.html"));
    }
    else
    {
      res.redirect("/get-started") ;
    }
};

let postTemplate3 = function (req, res) {
  res.status(201).send("template - 3");
};

// Exports Code :

module.exports = {
  getRegister,
  postRegister,

  getLogin,
  postLogin,

  getForgetPass,
  postForgetPass,

  getAbout,
  getBenefits,
  getGetStarted,
  getPlans,
  getSettings,
  getCoverLetter ,
  getJobTracker ,
  getLogout ,

  getTemplate1,
  postTemplate1,
  getTemplate2,
  postTemplate2,
  getTemplate3,
  postTemplate3,
};
