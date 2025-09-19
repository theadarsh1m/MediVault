const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require("path");

const { connectToMongoDB } = require('./connect');
const Patient = require('./models/Patient');
const Doctor = require('./models/Doctor');
const Hospital = require('./models/Hospital');


const app = express();
dotenv.config();

const PORT = process.env.PORT || 8001;

connectToMongoDB(process.env.MONGO_URI);

// View Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());  // Express built-in middleware to parse JSON
app.use(express.urlencoded({ extended: false }));


// routes
app.get('/', (req, res) => {
  res.send('Medivault is runnning');
});

app.post('/signup', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    if(role === "patient") {
      const user = new Patient({ name, email, password });
      await user.save();
    } else if(role === "doctor") {
      const user = new Doctor({ name, email, password });
      await user.save();
    } else if(role === "hospital") {
      const user = new Hospital({ name, email, password });
      await user.save();
    }
    res.send("Signup successful");
  } catch(err) {
    console.log(err);
    res.send("Error signing up");
  }
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});