const express = require('express');
const router = express.Router();


const{ContactForm} = require("../controllers/Contact")

router.post("/form",ContactForm );

module.exports = router;