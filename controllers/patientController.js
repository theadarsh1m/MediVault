const Patient = require("../models/Patient");

async function updatePatientInfo (req, res) {
  try {
    // Only patients are allowed
    if (req.user.role !== "patient") {
      return res.status(403).json({ message: "Access denied. Patients only." });
    }

    const patientId = req.user.id;

    // Allowed fields only
    const { bloodGroup, address, phone, emergencyContactName, emergencyContactRelation, emergencyContactPhone } = req.body;

    const updateFields = {};
    if (bloodGroup) updateFields.bloodGroup = bloodGroup;
    if (address) updateFields.address = address;
    if (phone) updateFields.phone = phone;
    
    // Handle emergency contact as an object
    if (emergencyContactName || emergencyContactRelation || emergencyContactPhone) {
      updateFields.emergencyContact = {};
      if (emergencyContactName) updateFields.emergencyContact.name = emergencyContactName;
      if (emergencyContactRelation) updateFields.emergencyContact.relation = emergencyContactRelation;
      if (emergencyContactPhone) updateFields.emergencyContact.phone = emergencyContactPhone;
    }

    const updatedPatient = await Patient.findByIdAndUpdate(
      patientId,
      { $set: updateFields },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json({
      message: "Profile updated successfully",
      patient: updatedPatient,
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Error updating profile", error: error.message });
  }
};

module.exports = {updatePatientInfo};
