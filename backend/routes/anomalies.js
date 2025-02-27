const express = require('express');
const router = express.Router();
const anomalyController = require('../controllers/anomalyController.js');

router.get('/anomalies', anomalyController.getAnomalies);

module.exports = router;