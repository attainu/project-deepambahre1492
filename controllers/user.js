const bcrypt = require("bcryptjs");
const SessionModel = require("../models/session");
const UserModel = require("../models/user");
const auth = require("../middleware/auth");
const ttl = 1000*60*60;
// Handles User Register
const register= (req, res, next) => {
    if(!req.body){
        return res.status(422).json({message:"Please provide proper credentials"});
    }
    if(!req.body.username || !req.body.password){
        return res.status(422).json({message:"Please provide proper credentials"});
    }
    if(req.body.password.length < 8 || req.body.username.length < 4){
        return res.status(422).json({message:"Please provide proper credentials"});
    }
    if(req.body.email.length < 0 ){
        return res.status(422).json({message:"Please provide proper credentials"});
    }

    bcrypt.hash(req.body.password,14,function(err,hash){
        if(err){
            return res.status(422).json({message:"Please provide proper credentials"});
        }
        let user = new UserModel({
            username: req.body.username,
            password: hash,
            email: req.body.email
        })

        user.save(function(err,user){
            if(err){
                console.log("Regiser failed. Error: "+err);
                return res.status(409).json({message:"Username already in use"})
            }else {
                console.log('Register success. Username:'+user.username);
                return res.status(200).json({message:"Register success!"},user)
            }
        })
    })

}

// Handles User Login
const login= (req, res, next) => {
    if(!req.body){
        return res.status(422).json({message:"Please provide proper credentials"});
    }
    if(!req.body.username || !req.body.password){
        return res.status(422).json({message:"Please provide proper credentials"});
    }
    if(req.body.password.length < 8 || req.body.username.length < 4){
        return res.status(422).json({message:"Please provide proper credentials"});
    }

    let user = {
        username: req.body.username,
        password: req.body.password
    }

    UserModel.findOne({"username":req.body.username},function (err,user){
        if(err){
            console.log("Error in finding user: " +err);
            return res.status(403).json({message:"username or password incorrect"});
        }
        if(!user){
            return res.status(403).json({message:"username or password incorrect"});
        }
        bcrypt.compare(req.body.password,user.password, function(err,success){
            if(err){
                return res.status(403).json({message:"username or password incorrect"});
            }
            if(!success){
                return res.status(403).json({message:"username or password incorrect"});
            }
            let token = auth.tokengenrator();
            let temp = Date.now();
            let session = new SessionModel({
                userInfo: user,
                user: user.username,
                token:token,
                ttl: temp+ttl
            })
            session.save(function(err,session){
                if(err){
                    return res.status(403).json({message:"username or password incorrect"});
                }
                if(!session){
                    return res.status(403).json({message:"username or password incorrect"});
                }
                return res.status(200).json({token:token})
            })
        })
    })
    
}

// Handles User Logout
const logout= (req, res, next) => {
    let token = req.headers.token;
	if(!token) {
		return res.status(404).json({message:"not found"})
    }
    SessionModel.findOne({"token":token},function(err,session){
        if(err){
            console.log("Error in finding session: " +err);
            return res.status(403).json({message:"Not found."});
        }
        if(!session){
            console.log("Session doesn't exist.");
            return res.status(403).json({message:"Not found."});
        }
        SessionModel.deleteOne({"_id":session._id},function(err){
            if(err){
                console.log("Failed to remove session.");
            }
            return res.status(200).json({message:"Success!"})
        })
    })
    
}

module.exports = { register, login, logout };