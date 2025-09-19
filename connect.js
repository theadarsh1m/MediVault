const mongoose = require('mongoose');

async function connectToMongoDB(uri) {
    return mongoose.connect(uri);  // built-in Mongoose method to connect to MongoDB.
}

module.exports = {
    connectToMongoDB,
}