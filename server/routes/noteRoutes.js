const express = require('express')
const router = express.Router();
const noteController = require('../controllers/noteController');

router.post('/add', noteController.addNote);
router.get('/', noteController.getNotes);

module.exports = router;