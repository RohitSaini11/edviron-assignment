const express = require("express");
const router = express.Router();
// console.log("router loaded!!");


router.get("/home",(req,res)=>{
     res.send({message:"hello from the api dude!!"});
});


module.exports = router;
