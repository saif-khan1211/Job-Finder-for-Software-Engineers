const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');


router.post('/add', questionController.createQuestion);
router.get('/', questionController.getQuestions);

module.exports = router;