const mongoose = require("mongoose");

let Schema = mongoose.Schema({
    productName: String,
    quantity: Number,
    price: Number,
    productColor: String,
    productImage:String,
    user:{type:String,indexed:true}
})

module.exports = mongoose.model("ShoppingItem",Schema);