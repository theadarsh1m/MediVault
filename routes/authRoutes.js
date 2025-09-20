const express = require("express");
const router = express.Router();
const { signup, login} = require("../controllers/authController");

router.get("/signup", (req, res) => {
    res.render("signup");
});

router.get("/login", (req, res) => {
    res.render("login");
});

// Signup route
router.post("/signup", signup);

router.post("/login", login);

module.exports = router;
