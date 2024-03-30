const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    addDate:{
        type : Date,
        default : Date.now(),
    },
    name :{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
    info:{
        type : Schema.Types.ObjectId,
        ref : "doctorInfo" ,
    },
    appointments : [{
         type : Schema.Types.ObjectId,
         ref : "appointment",
    }],
    image : {
        type : String,
    },
    discharge : {
        type : String,
    }
});

userSchema.plugin(passportLocalMongoose); 

const User = mongoose.model("User" , userSchema);
module.exports = User;