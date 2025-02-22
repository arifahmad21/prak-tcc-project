"use strict";

var express = require('express');

var router = express.Router();

var authController = require('./controller/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
module.exports = router;