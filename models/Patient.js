const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const patientSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    bloodGroup: { type: String, required: true, enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] },

    // editable by patient
    address: String,
    phone: String,
    emergencyContact: {
      name: String,
      relation: String,
      phone: String,
    },

    medicalHistory: {
      surgicalProcedures: [String], // eg ["Appendectomy"]
      alcoholOrSmoking: String, //  "Occasional smoker"
      organHealth: String, //  "Liver issues"
      healthConditions: [String], //  ["Thyroid", "Diabetes"]
      allergies: [String], //  ["Penicillin"]
      vaccinationRecords: [String], //  ["COVID-19", "Tetanus"]
      pastHospitalizations: [
        { reason: String, duration: String, hospitalName: String },
      ],
    },

    currentHealth: {
      medications: [
        {
          name: String,
          dosage: String,
          timing: String,
        },
      ],
      exerciseRoutine: String,
      mentalHealthStatus: String,
    },

    diagnostics: {
      labReports: [String], // store URLs to uploaded reports
      vitalSigns: {
        bloodPressure: String,
        heartRate: String,
        bmi: String,
        sugarLevels: String,
      },
      organFunction: {
        liver: String,
        kidney: String,
        others: String,
      },
      immunizationReminders: [String],
    },

    admin: {
      doctorNotes: String,
      prescriptions: [String],
      nextAppointment: Date,
      insuranceDetails: String,
      medicalDocuments: [String],
      chatHistory: [
        {
          sender: String,
          message: String,
          timestamp: { type: Date, default: Date.now },
        },
      ],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Hash password before saving
patientSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("Patient", patientSchema);
