module.exports.isHospital = async(req ,res ,next)=>{
    if(res.locals.currUser.username != "Newlifehospital"){
        req.flash("error" , "you are not loggedin as Hospital!");
        return res.redirect("/");
    }
    next();
};

module.exports.isDoctor = async(req ,res ,next)=>{
    if(res.locals.currUser.role != "doctor"){
        req.flash("error" , "you are not loggedin as Doctor!");
        return res.redirect("/");
    }
    next();
};

module.exports.saveRedirectUrl = (req , res , next) =>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};