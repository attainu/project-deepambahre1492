const SessionModel = require("../models/session");
const ttl = 1000*60*60;
const tokengenrator = () => {
    let token = "";
    letters = "tryecommarcestoreapp";
    for(let ii = 0; ii < 256; ii++){
        let temp = Math.floor(Math.random()*letters.length);
        token = token +letters[temp];
    }
    return token;

}

const isUserLogged = (req,res,next) => {
    let token = req.headers.token;
    if(!token){
        return res.status(403).json({message:"forbidden"})
    }

    SessionModel.findOne({"token":token},function(err,session) {
        if(err){
            return res.status(403).json({message:"forbidden"})
        }
    
        if(!session){
            return res.status(403).json({message:"forbidden"})
        }
        let now = Date.now();
        if(now > session.ttl){
            SessionModel.deleteOne({"_id":session._id},function(err) {
                if(err) {
                    console.log("Failed to remove session: "+err)
                }
                return res.status(403).json({message:"forbidden"})
            })
        }
        req.session = {};
        req.session.user = session.user;
        session.ttl = now+ttl;
        session.save(function(err) {
            return next();
        })
    
    })
}

module.exports = {tokengenrator,isUserLogged};