const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    addDate:{
        type : Date,
        default : Date.now(),
    },
    discharge :{
        type : Date,
    },
    ward:{
        type : String,
        required : true,
    },
    wardno:{
        type : String,
        required : true,
    },
    fname:{
        type : String,
        required : true,
    },
    mname:{
        type : String,
        required : true,
    },
    addp:{
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    state : {
        type : String,
        required : true,
    },
    country : {
        type : String,
        required : true,
    },
    zip : {
        type : Number,
        required : true,
    },
    phoneno : {
        type : Number,
        required : true,
    },
    dob : {
        type : String,
        required : true,
    },
    bg : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    },
    sex : {
        type : String,
        required : true,
    },
    grelation : {
        type : String,
    },
    gname : {
        type : String,
    },
    gadd : {
        type : String,
    },
    gcity : {
        type : String,
    },
    gstate : {
        type : String,
    },
    gcountry : {
        type : String,
    },
    gphone : {
        type : Number,
    },
    iname : {
        type : String,
        required : true,
    },
    ino : {
        type : Number,
        required : true,
    },
    fill:{
        type:String,
    },
    owner:{
        type : Schema.Types.ObjectId,
        ref : "User",
    },
    report :{
        type : Schema.Types.ObjectId,
    },
    bill : {
        type : Schema.Types.ObjectId,
    },
});

let patientInfo = mongoose.model("patientInfo" , patientSchema);
module.exports = patientInfo;