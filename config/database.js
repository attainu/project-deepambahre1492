const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://deepambahreShoppy:E-CommerceStore@e-commercestore.bavjy.mongodb.net/E-CommerceStore?retryWrites=true&w=majority',
    { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });
