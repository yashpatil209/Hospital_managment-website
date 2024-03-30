const express = require("express");
const router = express.Router();
const User = require("../models/user");
const doctorInfo = require("../models/doctorInfo");
const appointment = require("../models/appointment");
const nodemailer = require('nodemailer');


router.get("/" , async(req , res)=>{
    const doctors = await User.find({role :"doctor"});
    res.render("appointment/apointment.ejs" , {doctors});
})

router.post("/" , async(req , res)=>{
    let name = req.body.name;
    const doctors = await User.find({name :name} ||{department:department});
    res.render("appointment/apointment.ejs" , {doctors});
})

router.get("/dp" , async(req , res)=>{
    let department = req.query.department;
    const doctors = await User.find({department:department});
    res.render("appointment/apointment.ejs" , {doctors});
})

router.get("/:id/getappointment" , async(req , res)=>{
    let {id} = req.params;
    let doctor = await User.findById(id);
    res.render("appointment/getappoint.ejs" , {doctor});
})

router.post("/:id/getappointment" , async(req , res)=>{
    let Drappointment = new appointment(req.body.app);
    Drappointment.date = req.body.date;
    let doctor = await User.findById(req.params.id);
    doctor.appointments.push(Drappointment._id);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'yashkumarpatil2004@gmail.com',
          pass: 'ifbi emmj dcrg sjco'
        }
    });
      
    var mailOptions = {
        from: 'yashkumarpatil2004@gmail.com',
        to: Drappointment.emaila,
        subject: 'Newlife hospital Appointment',
        text: `You are successfully Book an appointment on date ${Drappointment.date} at ${Drappointment.time} session. please come before time . `,
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        }
    });

    await Drappointment.save();
    await doctor.save();
    req.flash("success" , "You are successfully Book an appointment! for more detail check email.")
    res.redirect("/newlife/appointment");
})


module.exports = router;
