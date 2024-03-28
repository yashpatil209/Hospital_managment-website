const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const appointment = require("./appointment.js");


const dInfoSchema = new Schema({
    fname:{
        type:String,
        required: true,
    },
    mname:{
        type:String,
        required:true,
    },
    mno:{
        type:Number,
        required:true,
    },
    add:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    zcode:{
        type:Number,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    sex:{
        type:String,
        required:true,
    },
    bg:{
        type:String,
        required:true,
    },
    degree:{
        type:String,
        required:true,
    },
    college:{
        type:String,
        required:true,
    },
    passy:{
        type:Number,
        required:true,
    },
    owner:{
        type : Schema.Types.ObjectId,
        ref : "User",
    },
    fill:{
        type:String,
    }
});

let doctorInfo = mongoose.model("doctorInfo" , dInfoSchema);
module.exports = doctorInfo;