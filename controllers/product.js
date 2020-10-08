
const express = require("express");
const app = express();
const Product = require("../models/product");
const fileupload = require('express-fileupload');
const UserModel = require("../models/user");
const  cloudinary = require('cloudinary').v2;
const dotenv = require("dotenv");
app.use(fileupload({useTempFiles:true}));

dotenv.config();

cloudinary.config({
  cloud_name: 'dts4wxk4i',
  api_key: '498335738472758',
  api_secret: 'mFI5WNXaJLZAl9AK4imtW7Xc7uw',
});

const addCart=async (req,res,next)=>{
   
    try{
        var username=req.session.user;
        const productId=req.params.pid;
        let added=false;
        const product=await Product.findById(productId,{"productName":1,"quantity":1,"price":1,"productColor":1,"productImage":1});

        const user=await UserModel.findOne({username:username},{"cartItems":1});
        console.log(user.cartItems.length);
        for(var i=0;i<user.cartItems.length;i++){
            if(user.cartItems[i]._id==productId){
               // console.log("yes");
                added=true;
                break;         
            }       
        }
        if(!added){
            let selectedProd=product;
        //selectedProd.quantity="1";
        user.cartItems.push(selectedProd);
        //user.markModified('user.cartItems');
        await user.save();
        res.send({"message":"Added to cart",cart:user.cartItems}).status(200);
        }
        else{
            res.send({"message":"Added to cart alreday"}).status(200);
        }

    }catch{
        res.send("Server not resposnding").status(500);
    }

}
const getProducByID=async (req,res,next)=>{
   try{
    var id=req.params.pid;
    const product=await Product.findById(id);
    console.log(product);
    if(product){
        res.json(product).status(200);
    }
    }catch{
        res.send("server error").status(500);
   }
}
const getCart=async (req,res,next)=>{
    //var username=req.params.username;
    try{
    var sessionUser=req.session.user;
    const user=await UserModel.findOne({username:sessionUser});
   //console.log(user);
    res.send(user.cartItems).status(200);
    }catch{
        res.send("Server Error").status(500);
    }
}
const quantityUpdate=async(req,res,next)=>{
    var username=req.session.user;
    const productId=req.params.pid;
    const quantity=req.params.quantity;
    let found=false;
    let foundIndex;
    try{
        const product=await Product.findById(productId,{"productName":1,"quantity":1,"price":1,"productColor":1,"productImage":1});
        const user=await UserModel.findOne({username:username},{"cartItems":1});
       
        for(var i=0;i<user.cartItems.length;i++){
            if(user.cartItems[i]._id==productId){
                found=true;
                foundIndex=i;
                break;
               // user.cartItems[i].quantity=quantity;
            }
        }
        if(!found){
            console.log(product)
            let singleProduct=product;
            singleProduct.quantity=quantity;
            user.cartItems.push(singleProduct);
           // user.markModified('user.cartItems');
            await user.save();
       
        }
        else{
            //console.log( user.cartItems[foundIndex],quantity);
            let xyz=user.cartItems[foundIndex];
           
            xyz.quantity=quantity;
            //xyz.save();
           // user.markModified('user.cartItems');
            await user.save();
            //res.json({"message":"Updated to Quantity",cart:user.cartItems});
            //res.status(200);
        }
        res.send({"message":"Added/Updated to cart",cart:user.cartItems});
        res.status(200);

    }catch{
        res.send("Server not resposnding").status(500);
    }
}
const profile=async (req,res,next)=>{
    const username=req.session.user;
    console.log(username);
    try{
        const userDetails=await UserModel.findOne({username:username},{cartItems:0});
        res.send(userDetails).status(200);
    }
    catch{
        res.send("Server eror").status(500);
    }
}
// Handles Get Product
const getProduct= (req, res, next) => {
    let query = {"user":req.session.user};
    console.log(req.session.user);
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
const allProducts=(req,res,next)=>{
    const products=Product.find({}).exec();
    res.send(products).status(200);
}
// Handles Add Product
const addProduct= (req, res, next) => {
    let item =new Product( {
        user: req.session.user,
        productName: req.body.productName,
        quantity: req.body.quantity,
        price: req.body.price,
        productColor: req.body.productColor,
        productDescription: req.body.productDescription,
        productBrand: req.body.productBrand,
        productSize: req.body.productSize
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
const deleteProduct= async (req, res, next) => {
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
const deletefromCart=async (req,res,next)=>{
    console.log("hello");
    try{
        let did=req.params.did;
    console.log(did);
    let username=req.session.user;
    console.log(did,username);
    const user=await UserModel.findOne({username:username},{"cartItems":1});
    console.log(user);
    let cartArray=user.cartItems;
    let dleteIndex;
    for(var i=0;i<cartArray.length;i++){
        if(cartArray[i]._id===did){
            dleteIndex=i;
            break;
        }
    }
    console.log(cartArray);
    cartArray.splice(dleteIndex,1);
    user.save();
    res.send({cart:user.cartItems}).status(200);
    }catch{
        res.send("server errro").status(500);
    }
    
}

const clearCart=async (req,res,next)=>{
    try{
    let username=req.session.user;
    //console.log(did,username);
    const user=await UserModel.findOne({username:username},{"cartItems":1});
        user.cartItems=[];
        user.save();
        res.send({cart:user.cartItems}).status(500);

    }catch{
        res.send("server errro").status(500);
    }
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
                productColor: req.body.productColor,
                productDescription: req.body.productDescription,
                productBrand: req.body.productBrand,
                productSize: req.body.productSize
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

module.exports = { getProduct, addProduct,deletefromCart, clearCart,deleteProduct, updateProduct,allProducts,addCart,getProducByID,quantityUpdate,profile,getCart};