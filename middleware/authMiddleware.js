const jwt = require("jsonwebtoken");
const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const Hospital = require("../models/Hospital");

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

async function authMiddleware(req, res, next) {
  try {
    const token = req.cookies?.token; // read token from cookie
    if (!token) return res.redirect("/auth/login");

    const decoded = jwt.verify(token, JWT_SECRET);
    let user;

    if (decoded.role === "patient") user = await Patient.findById(decoded.id);
    else if (decoded.role === "doctor")
      user = await Doctor.findById(decoded.id);
    else if (decoded.role === "hospital")
      user = await Hospital.findById(decoded.id);

    if (!user) return res.redirect("/auth/login");

    req.user = {
      id: user._id,
      uid: user.uid,
      name: user.name,
      email: user.email,
      role: decoded.role,
    };

    next();
  } catch (err) {
    console.error(err);
    return res.redirect("/auth/login");
  }
}

module.exports = authMiddleware;
