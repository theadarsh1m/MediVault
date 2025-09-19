const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// routes
app.get('/', (req, res) => {
  res.send('Medivault is runnning');
});

app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT}`);
});