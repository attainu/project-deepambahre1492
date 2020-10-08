const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userid: mongoose.Schema.Types.ObjectId,
    products: [],
});

module.exports = mongoose.model('Carts', cartSchema)