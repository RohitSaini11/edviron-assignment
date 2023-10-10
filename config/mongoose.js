const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://assignment:edviron@cluster0.ebxruu8.mongodb.net`);

const db= mongoose.connection;

db.on('erro',console.error.bind(console,"Error in connection to database"));

db.once('open', function(){
    console.log('Database Connected Successfully !!');
});

module.exports = db;