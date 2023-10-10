const mongoose= require("mongoose");
const db = require('../config/mongoose');

const Que = mongoose.model('questions',new mongoose.Schema({}, { strict: false }), 'questions');



module.exports.findDefaultees = async function(req,res){
    
    try {
        const que_id = '64d0c27f5cfee53b7ea895d8';
        
        const getOne= await Que.findById(que_id);
        
        if(getOne){
            res.send(getOne);
        }

    } catch (error) {
        res.send(`Database error: can't the given student: ${error}`)
        // console.log("Database error: can't the given student \n ",error);
    }

}