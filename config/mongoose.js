const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1/pollingAPI`);

const db= mongoose.connection;

db.on('erro',console.error.bind(console,"Error in connection to database"));

db.once('open', function(){
    console.log('Database Connected');
});

module.exports = db;