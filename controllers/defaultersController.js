const mongoose= require("mongoose");
const db = require('../config/mongoose');

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
    }

}