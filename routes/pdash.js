const express = require("express");
const router = express.Router();
const User = require("../models/user");
const patientInfo = require("../models/patientInfo");


router.get("/:id" , async(req , res)=>{
    res.render("patientdash/info.ejs");
});

router.get("/:id/information" , async(req , res)=>{
    let {id} = req.params;
    let patient = await User.findById(id);
    let pInfo = await patientInfo.findById(patient.info);
    res.render("patientdash/info.ejs" , {patient , pInfo });
});

module.exports = router;