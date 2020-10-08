const express = require("express");
const upload  = require('../middleware/upload');
const ProductControllers = require("../controllers/product");
const router = express();

//Product REST API

router.get('/product',ProductControllers.getProduct); //get user products

router.get('/cart/:pid',ProductControllers.addCart); //add to cart

router.get('/cart/:pid/:quantity',ProductControllers.quantityUpdate);  //update quantity of added product 

router.get('/cart',ProductControllers.getCart);  //get Cart Items

router.get('/profile',ProductControllers.profile);

router.delete('/cart/delete/:did',ProductControllers.deletefromCart);

router.delete('/cart/clear',ProductControllers.clearCart);

router.post('/product', upload.single('productImage'), ProductControllers.addProduct);

router.delete('/product/:id',ProductControllers.deleteProduct);

router.get('/product/:pid',ProductControllers.getProducByID); //get single product

router.get('/products',ProductControllers.allProducts);

router.put('/product/:id',ProductControllers.updateProduct);

module.exports = router;

