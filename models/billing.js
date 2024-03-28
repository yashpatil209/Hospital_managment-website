const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
    patient:{
        type : Schema.Types.ObjectId,
        required:true,
    },
    injection : {
        type : Number,
        default : 0 ,
    },
    saline : {
        type : Number,
        default : 0 ,
    },
    dressing : {
        type : Number,
        default : 0 ,
    },
    labfees : {
        type : Number,
        default : 0 ,
    },
    operation : {
        type : Number,
        default : 0 ,
    },
    other : {
        type : Number,
        default : 0 ,
    }
});

let billing = mongoose.model("billing" , billSchema);
module.exports = billing;