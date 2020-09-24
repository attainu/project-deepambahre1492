const express = require("express");
const upload  = require('../middleware/upload');
const ProductControllers = require("../controllers/product");
const router = express();

//Product REST API

router.get('/product',ProductControllers.getProduct);

router.post('/product', upload.single('productImage'), ProductControllers.addProduct);

router.delete('/product/:id',ProductControllers.deleteProduct);

router.put('/product/:id',ProductControllers.updateProduct);

module.exports = router;

