// logic related to patient

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { updatePatientInfo } = require("../controllers/patientController");

// Update patient info
router.put("/update", authMiddleware, updatePatientInfo);

module.exports = router;
