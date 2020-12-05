function sessionAuth(req,res,next){
// set session for every pug file
res.locals.user = req.session.user;
next();
}

module.exports = sessionAuth;