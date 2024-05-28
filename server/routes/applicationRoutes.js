const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

router.post('/add', applicationController.addApplication);
router.get('/', applicationController.getApplications);

module.exports = router;