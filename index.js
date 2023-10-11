const express= require("express");
const PORT= 8000;

const app= express();
const db = require('./config/mongoose');


app.use('/',require('./routes'));



app.listen(PORT,function(err){
    if(err){
        console.log(`Error starting the server: ${err}`);
    }
    console.log(`Server up and running at port: ${PORT}`);
});

module.exports = app;