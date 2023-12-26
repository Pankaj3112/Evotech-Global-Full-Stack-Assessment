const express = require('express');
const router = express.Router();

const surveyController = require('../controllers/survey_controller');

router.post('/submit', surveyController.submit);

module.exports = router;