const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bugs_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Could not connect to Mongo"));
db.once('open', function(){
    console.log("Successfully connected to the mongo");
});

module.exports = db;