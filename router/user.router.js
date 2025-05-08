// initial code

"use strict";
console.clear();

// Starts The Main Code :

// Require All The Modules , Packages And Objects :

let express = require("express");
let userRoute = express.Router();

let passport = require("passport");

const {
  getRegister,
  postRegister,
  getLogin,
  postLogin,
  getAbout,
  getBenefits,
  getForgetPass,
  postForgetPass,
  getGetStarted,
  getPlans,
  getSettings,
  getTemplate1,
  postTemplate1,
  getTemplate2,
  postTemplate2,
  getTemplate3,
  postTemplate3,
  getLogout,
  getCoverLetter,
  getJobTracker,
} = require("../controller/user.controller");
const { registerCheck } = require("../validation/registerCheck.validation");
const givingValidationResult = require("../validation/registerResult.validation");


// Routing code :

userRoute.get("/register", getRegister);
userRoute.post("/register",registerCheck,givingValidationResult,postRegister);

userRoute.get("/login", getLogin);
userRoute.post('/login', 
  passport.authenticate('local', 
    { 
      failureRedirect: '/get-started'  , 
      successRedirect : '/get-started'}),
);

userRoute.get("/forget-password", getForgetPass);
userRoute.post("/forget-password", postForgetPass);

userRoute.get("/about", getAbout);
userRoute.get("/benefits", getBenefits);
userRoute.get("/get-started", getGetStarted);
userRoute.get("/plans", getPlans);
userRoute.get("/settings", getSettings);
userRoute.get("/cover-letter", getCoverLetter);
userRoute.get("/job-tracker", getJobTracker);
userRoute.get("/logout" , getLogout) ;

userRoute.get("/template1", getTemplate1);
userRoute.post("/template1", postTemplate1);

userRoute.get("/template2", getTemplate2);
userRoute.post("/template2", postTemplate2);

userRoute.get("/template3", getTemplate3);
userRoute.post("/template3", postTemplate3);


//passport google :

userRoute.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

  userRoute.get('/auth/google/callback', 
  passport.authenticate('google', 
      { 
          failureRedirect: '/about' ,
          successRedirect : "/get-started?auth=1"
      }),
);

// Exports Code :

module.exports = userRoute;
