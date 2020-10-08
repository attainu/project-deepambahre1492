const Order = require('../models/order')
const Product = require('../models/product')
const mongoose = require("mongoose")

exports.orders_get_all = async (req, res, next) => {
     // find restaurant by id
     console.log(req.params.id);
     Product.findById(req.params.id, function(err, product){
         if(err){
             console.log(err);
         } else {
              res.json("result", {product: product});
         }
     })
}

exports.orders_create_order = async (req, res, next) => {
    Product.findById(req.params.id, function(err, product){
        if(err){
            console.log(err);
            res.json(err);
        } else {
            Order.create(req.body.order, function(err, order){
            if(err){
                res.json(err);
            } else {
                //add username and id to comment
                order.quantity = req.body.quantity;
                //save comment
                order.save();
                product.orders.push(order);
                product.save();
                console.log(order);
                res.json(order);
            }
         });
        }
    });
}

exports.orders_get_order = (req, res, next) => {
    
}

exports.orders_delete_order = (req, res, next) => {
   

}