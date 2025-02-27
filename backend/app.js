const express = require('express');
const app = express();

const anomaliesRoute = require('./routes/anomalies.js');

app.use('/api', anomaliesRoute);

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})