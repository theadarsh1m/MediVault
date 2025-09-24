const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const Hospital = require("../models/Hospital");

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

// Signup Controller
async function signup(req, res) {
  const { name, email, password, role } = req.body;

  try {
    let user;
    if (role === "patient") {
      user = new Patient({ name, email, password });
    } else if (role === "doctor") {
      user = new Doctor({ name, email, password });
    } else if (role === "hospital") {
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
}

// login

async function login(req, res) {
  const { email, password } = req.body;

  try {
    let user =
      (await Patient.findOne({ email })) ||
      (await Doctor.findOne({ email })) ||
      (await Hospital.findOne({ email }));

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password); // input pass and that found user pass
    if (!isMatch) {
      // if pass is wrong, doesnot match
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.constructor.modelName.toLowerCase() },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true, // secure from JS access
      secure: process.env.NODE_ENV === "production", // only HTTPS in prod
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    const dashboards = {
      patient: "patientDashboard",
      doctor: "doctorDashboard",
      hospital: "hospitalDashboard",
    };

    const role = user.constructor.modelName.toLowerCase();
    const view = dashboards[role]; // the dashboard which we have to render

    if (!view) return res.status(404).json({ message: "Role not recognized" });

    res.render(view, {
      user: {
        name: user.name,
        email: user.email,
        role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

module.exports = {
  signup,
  login,
};
