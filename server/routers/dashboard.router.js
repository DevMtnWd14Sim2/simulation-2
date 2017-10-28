const express = require('express');
const getDb = require('../database/bootstrap.database');
const dashboardRouter = express.Router();

dashboardRouter.get('/get_all_properties', (req, res) => {
    const dbInstance = getDb();
    dbInstance.get_all_properties()
        .then(properties => res.status(200).send(properties))
        .catch(err => res.send(err));
});

module.exports = dashboardRouter;
