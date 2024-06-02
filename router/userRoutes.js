const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/:id', userController.findById);
router.get('/', userController.findAllUsers);
router.put('/:id', userController.update);  // Rute untuk update user
router.delete('/:id', userController.delete);  // Rute untuk delete user

module.exports = router;
