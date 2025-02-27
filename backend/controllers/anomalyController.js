
const Anomaly = require('../models/Anomaly');

const AnomalyController = {
  getAnomaliesInRange: async (startDate, endDate) => {
    
    const anomalies = [
      { id: 1, date: '2022-01-01', value: 10 },
      { id: 2, date: '2022-01-05', value: 20 },
      { id: 3, date: '2022-01-10', value: 30 },
      { id: 4, date: '2022-01-15', value: 40 },
      { id: 5, date: '2022-01-20', value: 50 },
    ];

    if(!startDate || !endDate) {
      throw error;
    }

    return anomalies.filter((anomaly) => {
      const anomalyDate = new Date(anomaly.date);
      return anomalyDate >= new Date(startDate) && anomalyDate <= new Date(endDate);
    });
  },

  getAnomalies: async (req, res) => {
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;

    if (!startDate || !endDate) {
      return res.status(400).send({ error: 'Missing start or end date' });
    }

    const anomalies = await AnomalyController.getAnomaliesInRange(startDate, endDate);
    return res.json(anomalies);
  },

};

module.exports = AnomalyController;