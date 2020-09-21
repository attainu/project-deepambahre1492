const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
  return res.status(200).json({message: 'index page rendered!'});
  //return res.sendFile(path.join(__dirname, 'client', 'public/index.html'));
});


module.exports = router;