
const express = require("express");
const app = express();
const Product = require("../models/product");
const fileupload = require('express-fileupload');
const  cloudinary = require('cloudinary').v2;
const dotenv = require("dotenv");
app.use(fileupload({useTempFiles:true}));

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



// Handles Get Product
const getProduct= (req, res, next) => {
    let query = {"user":req.session.user};
    if(req.query.productName){
        query = {
            "user":req.session.user,
            "productName":req.query.productName
        }
    }

    Product.find(query,{"productName":1,"quantity":1,"price":1,"productColor":1,"productImage":1}, (err,items)  => {
        if(err){
            return res.status(200).json([])
        }
        if(!items){
            return res.status(200).json([])
        }
        return res.status(200).json(items)
    })
}

// Handles Add Product
const addProduct= (req, res, next) => {
    let item =new Product( {
        user: req.session.user,
        productName: req.body.productName,
        quantity: req.body.quantity,
        price: req.body.price,
        productColor: req.body.productColor
    })

    if(req.file){
        //save images in cloud 
    cloudinary.uploader.upload(req.file.path,(err,result) => {    //save images in cloud 
        console.log(result)
     
        item.productImage=result.url;
         console.log(item.productImage);
         item.save()
     .then(()=>res.json('Product image Added!'))
      .catch(err=>res.status(400).json("Error:"+err));
        })
     }
     console.log(item);
}

// Handles Product Delete
const deleteProduct= (req, res, next) => {
    let id = req.params.id;
    Product.findById(id,function(err,item){
        if(err) {
            console.log("Error in removing Product: "+err)
            return res.status(404).json({message:"not found"})
        }
        if(!item) {
            return res.status(404).json({message:"not found"})
        }
        if(item.user === req.session.user) {
            Product.deleteOne({"_id":item._id},(err) => {
                if(err){
                    console.log('Failed to remove item: '+err)
                    return res.status(409).json({message:"conflict"})
                }
                return res.status(200).json({message:"success"})
            })
        } else {
            return res.status(409).json({message:"conflict"})
        }
    })
}

// Handles Product Update
const updateProduct= (req, res, next) => {
    let id = req.params.id;
    Product.findById(id,function(err,item){
        if(err) {
            console.log("Error in editing Product: "+err)
            return res.status(404).json({message:"not found"})
        }
        if(!item) {
            return res.status(404).json({message:"not found"})
        }
        if(item.user === req.session.user) {
            Product.replaceOne({"_id":item._id},{
                user:   req.session.user,
                productName:   req.body.productName,
                quantity:  req.body.quantity,
                price:  req.body.price,
                productColor: req.body.productColor
            }, (err) => {
                if(err){
                    console.log('Failed to edit item: '+err)
                    return res.status(409).json({message:"conflict"})
                }
                return res.status(200).json({message:"success"})
            })
        } else {
            return res.status(409).json({message:"conflict"})
        }
    })
}

module.exports = { getProduct, addProduct, deleteProduct, updateProduct};