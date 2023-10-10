const express = require("express");
const router = express.Router();
// console.log("router loaded!!");
// db.getCollection("students").find({});
const defaultersController = require('../../controllers/defaultersController');

router.get("/",(req,res)=>{
     res.send({message:"hello from the api dude!!"});
});

router.get("/defaultees",defaultersController.findDefaultees);

module.exports = router;
