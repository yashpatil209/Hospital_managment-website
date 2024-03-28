const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const nodemailer = require('nodemailer');
const { isHospital } = require("../middleware");

router.get("/signup" , isHospital ,(req , res)=>{
    res.render("hdashboard/signup.ejs")
})

router.post("/signup" , isHospital, async(req , res)=>{
    let {username , email , name ,department , role ,password} = req.body;
    const newUser = new User({email ,username ,name ,department , role });
    const user = await User.register(newUser , password);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'yashkumarpatil2004@gmail.com',
          pass: 'ifbi emmj dcrg sjco'
        }
    });
      
    var mailOptions = {
        from: 'yashkumarpatil2004@gmail.com',
        to:email,
        subject: 'Newlife hospital registration',
        text: `You are successfully registered to NewLife Hospital! Your username : ${username} and password : ${password} by using this you access your dashboard.`,
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        }
    });

    res.redirect("/signup");
})


router.get("/login" , (req , res)=>{
    res.render("user/login.ejs");
})

router.post("/login" , passport.authenticate("local" ,{failureRedirect : '/login', failureFlash:true}), (req , res)=>{
    let loginUser = req.user;
    if(loginUser){
        if(loginUser.role == "hospital"){
            res.redirect("/newlife/hdashboard");
        }
        else if(loginUser.role == "doctor"){
            res.redirect(`/newlife/ddashboard/${loginUser._id}`);
        }
        else if(loginUser.role == "patient"){
            res.redirect(`/newlife/pdashboard/${loginUser._id}/information`);
        }
        else{
            res.redirect("/");
        }
    }
});

router.get("/logout" , (req , res)=>{
    req.logout((err) =>{
        if(err) {
            return next(err);
        }
        req.flash("success" , "you are logout");
        res.redirect("/");
    })
});

module.exports = router;