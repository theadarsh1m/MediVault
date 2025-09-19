const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/authController");

// Signup route
router.post("/signup", signup);

module.exports = router;
