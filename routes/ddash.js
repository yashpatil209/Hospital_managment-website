const express = require("express");
const router = express.Router();
const User = require("../models/user");
const doctorInfo = require("../models/doctorInfo");
const appointment = require("../models/appointment");
const pReport = require("../models/patientreport");
const { isDoctor  , saveRedirectUrl} = require("../middleware");
const multer = require("multer");
const {storage} = require("../cloudConfig");
const patientInfo = require("../models/patientInfo");
const upload = multer({storage});


router.get("/:id/myappointments" ,isDoctor, async(req , res)=>{
    let {id} = req.params;
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    mm = (mm < 10) ? "0"+mm : mm;
    dd = (dd < 10) ? "0"+dd : dd;
    let date = yyyy+"-"+mm+"-"+dd;
    let myapps = await User.findById(id)
    .populate({path:"appointments" , match: { date: date }});
    res.render("ddashboard/myappointment.ejs" , {myapps , id});
})

router.delete("/:id/appointmentdone" , async(req , res)=>{
   let  {id} = req.params;
   let pid = req.query.id;
   await appointment.findByIdAndDelete(pid);
   res.redirect(`/newlife/ddashboard/${id}/myappointments`);
})

router.get("/:id/doctorinfo" ,isDoctor, async(req , res)=>{
    res.render("ddashboard/Info.ejs");
})

router.post("/:id/doctorinfo", upload.single("info[image]") ,isDoctor, async(req , res)=>{
    let {id} = req.params;
    const docInfo = new doctorInfo(req.body.info);
    let dr = await User.findById(id);
    let url = req.file.path;
    dr.info = docInfo._id;
    dr.image = url;
    docInfo.owner = id;
    docInfo.fill = "true";
    await docInfo.save();
    await dr.save();
    res.redirect(`/newlife/ddashboard/${id}`);
})

router.get("/:id/fillpatientreport" , async(req , res)=>{
    let {id} = req.params;
    res.render("ddashboard/patientreport.ejs" , {id});
})

router.post("/:id/fillpatientreport" ,upload.single("report[labr]"), async(req , res)=>{
    let {id} = req.params;
    let rep = new pReport(req.body.report);
    let patient = await User.findById(id);
    let pInfo = await patientInfo.findById(patient.info);
    let url = req.file.path;
    rep.labr = url;
    pInfo.report = rep._id;
 
    await pInfo.save();
    await rep.save();
    res.redirect(`/newlife/ddashboard/${id}/patients`);
})

router.get("/:id" ,isDoctor, async(req , res)=>{
    const {id} = req.params;
    const list = await User.findById(id);
    const count = await User.countDocuments({role : "patient"});
    res.render("ddashboard/dash.ejs" , {list , count});
})

router.get("/:id/patients" ,isDoctor, async(req , res)=>{
    let {id} = req.params;
    const doctor = await User.findById(id);
    const patients = await User.find({department : doctor.department , role: "patient"});
    res.render("ddashboard/patients.ejs" , {patients});
});

router.post("/:id/patients" , isDoctor , async(req , res)=>{
    let {id} = req.params;
    let name = req.body.name;
    const patients = await User.find({ name : name , role: "patient"});
    if(patients.length){
        res.render("ddashboard/patients.ejs" , {patients});
    }
    else{
        req.flash("error" , "Doctor not exits");
        res.redirect(`/newlife/ddashboard/${id}/patients`);
    }
})

router.get("/:id/doctors" ,isDoctor, async(req , res)=>{
    let {id} = req.params;
    const doctor = await User.findById(id);
    const doctors = await User.find({department : doctor.department , role :"doctor"});
    res.render("ddashboard/doctors.ejs" , {doctors});
});

router.post("/:id/doctors" , isDoctor , async(req , res)=>{
    let {id} = req.params;
    let name = req.body.name;
    const doctors = await User.find({name : name , role: "doctor"});
    if(doctors.length){
        res.render("ddashboard/doctors.ejs" , {doctors});
    }
    else{
        req.flash("error" , "Doctor not exits");
        res.redirect(`/newlife/ddashboard/${id}/doctors`);
    }
})



router.get("/:id/information" ,isDoctor, async(req , res)=>{
    let {id} = req.params;
    let doctor = await User.findById(id);
    let info = await doctorInfo.findById(doctor.info);
    res.render("ddashboard/viewInfo.ejs" , {info , doctor});
})


module.exports = router;