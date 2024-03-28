const express = require("express");
const router = express.Router();
const User = require("../models/user");
const doctorInfo = require("../models/doctorInfo");
const { isHospital } = require("../middleware");
const patientInfo = require("../models/patientInfo");
const multer = require("multer");
const {storage} = require("../cloudConfig");
const upload = multer({storage});


router.get("/" ,isHospital, async(req , res)=>{
    const doctors = await User.find({role : "doctor"});
    res.render("hdashboard/dash.ejs" , {doctors});
});

router.get("/doctors" ,isHospital, async(req , res)=>{
    const doctors = await User.find({role : "doctor"});
    res.render("hdashboard/doctors.ejs" , {doctors});
})

router.post("/doctors" , isHospital , async(req , res)=>{
    let name = req.body.name;
    const doctors = await User.find({name : name , role: "doctor"});
    // console.log(doctors);
    if(doctors.length){
        res.render("hdashboard/doctors.ejs" , {doctors});
    }
    else{
        req.flash("error" , "Doctor not exits");
        res.redirect("/newlife/hdashboard/patients");
    }
})

router.get("/patients" ,isHospital, async(req , res)=>{
    const patients = await User.find({role : "patient"});
    res.render("hdashboard/patients.ejs" , {patients });
})

router.post("/patients" , isHospital , async(req , res)=>{
    let name = req.body.name;
    const patients = await User.find({name : name , role : "patient" });
    if(patients.length){
        res.render("hdashboard/patients.ejs" , {patients});
    }
    else{
        req.flash("error" , "user not exits");
        res.redirect("/newlife/hdashboard/patients");
    }
})

router.get("/:id/fillpatientInfo" , async(req , res)=>{
    let {id} = req.params;
    res.render("hdashboard/patientInfo.ejs" , {id});
})

router.post("/:id/fillpatientInfo" ,upload.single("info[image]"), async(req , res)=>{
    let {id} = req.params;
    let pInfo = new patientInfo(req.body.info);
    const pat = await User.findById(id);
    let url = req.file.path;

    pat.info = pInfo._id;
    pat.image = url;
    pInfo.owner = id;
    pInfo.fill = "true";
    await pInfo.save();
    await pat.save();
    res.redirect("/newlife/hdashboard/patients");
})

router.get("/:id/patientInfo" ,isHospital, async(req , res)=>{
    let {id} = req.params;
    let patient = await User.findById(id);
    let info = await patientInfo.findById(patient.info);
    res.render("hdashboard/viewpatInfo.ejs" , {info , patient});
})

router.get("/:id/doctorinfo" ,isHospital, async(req , res)=>{
    let {id} = req.params;
    let doctor = await User.findById(id);
    let info = await doctorInfo.findById(doctor.info);
    if(info){
        res.render("hdashboard/docInfo.ejs" , {info , doctor});
    }
    req.flash("success" , "Information not filled!")
    res.redirect("/newlife/hdashboard/doctors");
})



module.exports = router;