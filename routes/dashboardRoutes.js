const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/patient", authMiddleware, (req, res) => {
  if (req.user.role !== "patient") return res.redirect("/auth/login");
  res.render("patientDashboard", { user: req.user });
});

router.get("/doctor", authMiddleware, (req, res) => {
  if (req.user.role !== "doctor") return res.redirect("/auth/login");
  res.render("doctorDashboard", { user: req.user });
});

router.get("/hospital", authMiddleware, (req, res) => {
  if (req.user.role !== "hospital") return res.redirect("/auth/login");
  res.render("hospitalDashboard", { user: req.user });
});

module.exports = router;
