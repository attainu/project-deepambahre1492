const express = require("express");
const UserControllers = require("../controllers/user");
const router = express.Router();

//LOGIN API

router.post("/register",UserControllers.register);

router.post("/login",UserControllers.login);

router.post("/logout",UserControllers.logout);

module.exports = router;