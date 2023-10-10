const mongoose= require("mongoose");
const db = require('../config/mongoose');

// const Que = mongoose.model('questions',new mongoose.Schema({}, { strict: false }), 'questions');
const Students = mongoose.model('students',new mongoose.Schema({}, { strict: false }), 'students');
const Invoices = mongoose.model('invoices',new mongoose.Schema({}, { strict: false }), 'invoices');


module.exports.findDefaultees = async function(req,res){
    
    try {
        const defaultees= await Students.aggregate([
            {
              $lookup: {
                from: "invoices",
                localField: "_id",
                foreignField: "student",
                as: "invoices"
              }
            },
            {
              $unwind: "$invoices"
            },
            {
              $match: {
                "invoices.status": "unpaid"
              }
            }
        ]);
        if(defaultees){
            res.send(defaultees);
        }

    } catch (error) {
        res.send(`Database error: can't data: ${error}`)
        // console.log("Database error: can't the given student \n ",error);
    }

}