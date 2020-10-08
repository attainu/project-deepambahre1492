const mongoose = require("mongoose");

let ProductSchema = mongoose.Schema({
    productName: String,
    quantity: String,
    price: Number,
    productColor: String,
    productImage:String,
    productDescription: String,
    productBrand: String,
    productSize: String,
    user:{type:String,indexed:true},
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
     }]
})


module.exports = mongoose.model("Product",ProductSchema);