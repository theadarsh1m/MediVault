const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require("path");

const { connectToMongoDB } = require('./connect');

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

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});