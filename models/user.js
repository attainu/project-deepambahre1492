const mongoose = require("mongoose");

let Schema = mongoose.Schema({
    username:{type:String,unique:true},
    password:String,
    email:{type:String,unique:true},
    profile: {
        type: String,
        default:"https://i.postimg.cc/mgbV8W88/profile.png"
      },
    cartItems:[Object]
})

module.exports = mongoose.model("User",Schema);