const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appSchema = new Schema({
    namea:{
        type:String,
        required:true,
    },
    emaila:{
        type:String,
        required:true,
    },
    phonea:{
        type:Number,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
});

let appointment = mongoose.model("appointment" , appSchema);
module.exports = appointment;