const express = require('express');
const router = express.Router();
const noteController = require('../controller/noteController');

router.post('/', noteController.create);
router.get('/', noteController.findAllNotes);       // Endpoint untuk menampilkan semua catatan
router.get('/:userId', noteController.findByUserId);
router.put('/:id', noteController.update);
router.delete('/:id', noteController.delete);

module.exports = router;
