function checksessionAuth(req,res,next){
    // set session for every pug file
    if (req.session.user) next();
    else return res.redirect("/login");
    }
    
    module.exports = checksessionAuth;