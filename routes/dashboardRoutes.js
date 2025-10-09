const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const Hospital = require("../models/Hospital");

router.get("/patient", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "patient") {
      return res.redirect("/auth/login");
    }

    // Fetch complete patient data from database
    const patient = await Patient.findById(req.user.id).select("-password");

    if (!patient) {
      return res.redirect("/auth/login");
    }

    // Pass all patient data to the view
    res.render("patientDashboard", {
      user: {
        // Core patient details
        id: patient._id,
        uid: patient.uid,
        name: patient.name,
        email: patient.email,
        dob: patient.dob,
        gender: patient.gender,
        role: "patient", // Static role assignment

        // Contact and emergency info
        bloodGroup: patient.bloodGroup,
        address: patient.address,
        phone: patient.phone,
        emergencyContact: patient.emergencyContact,

        // Comprehensive health information
        medicalHistory: patient.medicalHistory,
        currentHealth: patient.currentHealth,
        diagnostics: patient.diagnostics,

        // Admin-controlled information
        admin: patient.admin,
      },
    });
  } catch (error) {
    console.error("Error loading patient dashboard:", error);
    res.status(500).send("Error loading dashboard");
  }
});

router.get("/doctor", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "doctor") {
      return res.redirect("/auth/login");
    }

    // Fetch complete doctor data from database
    const doctor = await Doctor.findById(req.user.id).select("-password");

    if (!doctor) {
      return res.redirect("/auth/login");
    }

    // Pass all doctor data to the view
    res.render("doctorDashboard", {
      user: {
        id: doctor._id,
        name: doctor.name,
        email: doctor.email,
        uid: doctor.uid,
        specialization: doctor.specialization,
        licenseNumber: doctor.licenseNumber,
        experience: doctor.experience,
        hospital: doctor.hospital,
        role: "doctor",
      },
    });
  } catch (error) {
    console.error("Error loading doctor dashboard:", error);
    res.status(500).send("Error loading dashboard");
  }
});

router.get("/hospital", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "hospital") {
      return res.redirect("/auth/login");
    }

    // Fetch complete hospital data from database
    const hospital = await Hospital.findById(req.user.id).select("-password");

    if (!hospital) {
      return res.redirect("/auth/login");
    }

    // Pass all hospital data to the view
    res.render("hospitalDashboard", {
      user: {
        id: hospital._id,
        name: hospital.name,
        email: hospital.email,
        uid: hospital.uid,
        address: hospital.address,
        numberOfBeds: hospital.numberOfBeds,
        contactNumber: hospital.contactNumber,
        role: "hospital",
      },
    });
  } catch (error) {
    console.error("Error loading hospital dashboard:", error);
    res.status(500).send("Error loading dashboard");
  }
});

module.exports = router;
