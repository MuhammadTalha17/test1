// models/Anomaly.js
const mongoose = require('mongoose');

const anomalySchema = new mongoose.Schema({
  id: Number,
  date: Date,
  value: Number
});

const Anomaly = mongoose.model('Anomaly', anomalySchema);

module.exports = Anomaly;