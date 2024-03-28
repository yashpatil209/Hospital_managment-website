const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const preportSchema = new Schema({
    height :{
        type: Number,
        required:true,
    },
    weight:{
        type:Number,
        required:true,
    },
    bloodp:{
        type:Number,
        required:true,
    },
    symptoms:{
        type:String,
        required:true,
    },
    deasease:{
        type : String,
        required : true,
    },
    labr:{
        type : String,
        required : true,
    },
    note :{
        type:String,
    }
});


const preport = mongoose.model("preport" , preportSchema);
module.exports = preport;