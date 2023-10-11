const express = require("express");
const router = express.Router();

const defaultersController = require('../../controllers/defaultersController');

router.get("/defaultees",defaultersController.findDefaultees);

module.exports = router;
