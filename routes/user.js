const express = require("express");
const UserControllers = require("../controllers/user");
const router = express.Router();
const auth = require("../middleware/auth");

//LOGIN API

router.post("/register",UserControllers.register);

router.post("/login",UserControllers.login);

router.post("/logout",UserControllers.logout);


router.get("/profile", auth.isUserLogged, async (req, res) => {
    let user = req.session.userInfo
    //console.log(username)
    res.send(user)
  });



module.exports = router;