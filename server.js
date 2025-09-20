const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require("path");

const { connectToMongoDB } = require('./connect');
const authRoutes = require('./routes/authRoutes');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

connectToMongoDB(process.env.MONGO_URI);

// View Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());  // Express built-in middleware to parse JSON
app.use(express.urlencoded({ extended: false }));

// auth routes -> jitne bhi req /auth k baad aegi vo authRoutes handle krega
app.use("/auth", authRoutes);

// Main page route
app.get('/', (req, res) => {
  res.send('Medivault is runnning');
});



app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});