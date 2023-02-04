const mongoose = require('mongoose');
require('dotenv').config();

function connectDB() {
    mongoose.Promise = global.Promise;
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    const connection = mongoose.connection
    connection.on('open', () => {
        console.log("Database connected to MongoDB");
    })
    connection.on('error', error => {
        console.log("Error while connecting to Database");
    });
}

module.exports = connectDB;