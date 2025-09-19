const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Hospital = require('../models/Hospital');

// Signup Controller
exports.signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    let user;
    if(role === "patient") {
      user = new Patient({ name, email, password });
    } else if(role === "doctor") {
      user = new Doctor({ name, email, password });
    } else if(role === "hospital") {
      user = new Hospital({ name, email, password });
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }

    await user.save();
    res.status(201).json({ message: "Signup successful", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error signing up", error: err.message });
  }
};
