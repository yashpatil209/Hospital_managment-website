const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const patientInfo = require("../models/patientInfo");
const preport = require("../models/patientreport");
const billing = require("../models/billing");


router.get("/:id/patientInfo" , async(req , res)=>{
    let {id} = req.params;
    let patient = await User.findById(id);
    let info = await patientInfo.findById(patient.info);
    res.render("common/viewpatInfo.ejs" , {id , info , patient});
})

router.post("/:id/patientInfo" , async(req , res)=>{
    let {id} = req.params;
    let patient = await User.findById(id);
    let info = await patientInfo.findById(patient.info);
    info.discharge = new Date();
    patient.discharge = true;
    info.save();
    patient.save();

    res.redirect(`/newlife/${id}/hospitalbill`);
})


router.get("/:id/patientreport" , async(req , res)=>{
    let {id} = req.params;
    let patient = await User.findById(id);
    let info = await patientInfo.findById(patient.info);
    let report = await preport.findById(info.report);

    res.render("common/viewpreport.ejs" , {info , patient , report});
})

router.get("/:id/patientbilling" , async(req , res)=>{
    let {id} = req.params;
    res.render("common/billing.ejs" , {id});
})

router.post("/:id/patientbilling" , async(req , res)=>{
    let {id} = req.params;
    let billdetails = new billing(req.body.bill);
    let patient = await User.findById(id);
    let info = await patientInfo.findById(patient.info);
    info.bill = billdetails;
    billdetails.patient = id;
    billdetails.save();
    info.save();

    req.flash("success" , "Blilling details added");
    res.redirect(`/newlife/ddashboard/${id}/patients`);
})

router.get("/:id/hospitalbill" , async(req , res)=>{
    let {id} = req.params;
    let patient = await User.findById(id);
    let info = await patientInfo.findById(patient.info);
    let bill = await billing.findById(info.bill);
    let days = parseInt((info.discharge - info.addDate) / (1000*60*60*24));
    let bedCharge = 0;
    
    if(info.ward == "gw"){
        bedCharge = 1500 * days;
    }else if (info.ward == "sw"){
        bedCharge = 3000 * days;
    }else if (info.ward == "ssw"){
        bedCharge = 2500 * days;
    }else if (info.ward == "iw"){
        bedCharge = 5000 * days;
    }
    let nurseCharge = 200 * days;
    let total = bedCharge + nurseCharge + bill.injection + bill.saline + bill.dressing + bill.labfees + bill.operation;
    
    res.render("common/bill.ejs" , {id , patient , info , bill , nurseCharge , bedCharge , total});

})

module.exports = router;