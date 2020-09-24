let express = require("express");
let ShoppingItem = require("../models/product");
const upload  = require('../middleware/upload');
const app = express();
var fileupload = require('express-fileupload');
var  cloudinary = require('cloudinary').v2;
const dotenv = require("dotenv");
app.use(fileupload({useTempFiles:true}));
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

let router = express.Router();

//Dummy DB

let database = [];
let id = 100;




//Shopping REST API

router.get('/shopping',function(req,res){
    let query = {"user":req.session.user};
    if(req.query.productName){
        query = {
            "user":req.session.user,
            "productName":req.query.productName
        }
    }

    ShoppingItem.find(query,{"productName":1,"quantity":1,"price":1,"productColor":1,"productImage":1}, function(err,items){
        if(err){
            return res.status(200).json([])
        }
        if(!items){
            return res.status(200).json([])
        }
        return res.status(200).json(items)
    })
});

router.post('/shopping', upload.single('productImage'), function(req,res){
    let item =new ShoppingItem( {
        user: req.session.user,
        productName: req.body.productName,
        quantity: req.body.quantity,
        price: req.body.price,
        productColor: req.body.productColor
    })

    if(req.file){
        //save images in cloud 
    cloudinary.uploader.upload(req.file.path,function(err,result){    //save images in cloud 
        console.log(result)
     
        item.productImage=result.url;
         console.log(item.productImage);
         item.save()
     .then(()=>res.json('Product image Added!'))
      .catch(err=>res.status(400).json("Error:"+err));
        })
     }
     console.log(item);


/*
    item.save(function(err,item) {
        if(err){
            console.log("Error in saving shoppingitem: "+err)
            return res.status(409).json({message:"Not saved"})
        }
        if(!item){
            return res.status(409).json({message:"Not saved"})
        }
        console.log(item);
        return res.status(200).json({message:"success"})
    })*/

});

router.delete('/shopping/:id',function(req,res){
    let id = req.params.id;
    ShoppingItem.findById(id,function(err,item){
        if(err) {
            console.log("Error in removing shoppingitem: "+err)
            return res.status(404).json({message:"not found"})
        }
        if(!item) {
            return res.status(404).json({message:"not found"})
        }
        if(item.user === req.session.user) {
            ShoppingItem.deleteOne({"_id":item._id},function(err){
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
});

router.put('/shopping/:id',function(req,res){
    let id = req.params.id;
    ShoppingItem.findById(id,function(err,item){
        if(err) {
            console.log("Error in editing shoppingitem: "+err)
            return res.status(404).json({message:"not found"})
        }
        if(!item) {
            return res.status(404).json({message:"not found"})
        }
        if(item.user === req.session.user) {
            ShoppingItem.replaceOne({"_id":item._id},{
                user:   req.session.user,
                productName:   req.body.productName,
                quantity:  req.body.quantity,
                price:  req.body.price,
                productColor: req.body.productColor
            }, function(err){
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
    
});

module.exports = router;

