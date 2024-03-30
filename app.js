if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const path = require("path");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const localstratergy = require("passport-local");
const MongoStore = require("connect-mongo");

const User = require("./models/user");
const doctorInfo = require("./models/doctorInfo");
const {isLoggedIn} = require("./middleware.js");

const users = require("./routes/user.js");
const hospDash = require("./routes/hdash.js");
const docDash = require("./routes/ddash.js");
const patientDash = require("./routes/pdash.js");
const appointment = require("./routes/appointment.js");
const commonRoute = require("./routes/common.js");

const MONGO_DB = process.env.MONGO_DB;
const MONGO_URL = process.env.MONGO_URL;

main().then(()=>{
    console.log("connected to db")
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_DB);
}

app.set("view engine" , "ejs");
app.set("views " , path.join(__dirname , "views"));
app.use(express.urlencoded({extended :true}));
app.engine("ejs" , ejsMate);
app.use(express.static(path.join(__dirname , "/public")));


const store = MongoStore.create({
    mongoUrl : MONGO_DB,
    crypto : {
        secret : process.env.SECRETE,
    },
    touchAfter : 24 * 3600,
});

store.on("error" , ()=>{
    console.log("ERROR in MONGO session store" , err);
})

const sessionOptions = {
    store,
    secret : process.env.SECRETE,
    resave : false ,
    saveUninitialized : true ,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true ,
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localstratergy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req , res , next )=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

app.use("/" , users);
app.use("/newlife" , commonRoute);
app.use("/newlife/hdashboard" , hospDash);
app.use("/newlife/ddashboard" , docDash);
app.use("/newlife/pdashboard" , patientDash);
app.use("/newlife/appointment" , appointment);


app.get("/test" , async(req , res)=>{
    res.render("hdashboard/patientInfo.ejs");
})

app.post("/test" , async(req , res)=>{
    let pInfo = req.body.info;
    console.log(pInfo);
})

app.get("/" , (req , res)=>{
    res.render("pages/home.ejs");
});

// app.get("/demouser" , async(req , res)=>{
//         let fakeUser = new User({
//             email : "newlifehospital@gmail.com",
//             username : "Newlifehospital",
//             name : "Newlife Hospital",
//             role: "hospital",
//             department:"hospital",
//         });
    
//         let registerUser = await User.register(fakeUser , "newlife04");
//         res.send(registerUser);
// })


app.listen(8080 , ()=>{
    console.log("connected to port 8080");
})
