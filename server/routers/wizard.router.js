const express = require('express');
const getDb = require('../database/bootstrap.database');
const wizardRouter = express.Router();

wizardRouter.post('/create_property', (req, res) => {
    const dbInstance = getDb();

    //might need to pass in user_id from the session object
    
    const { name, description, address, city, state, zip, image_url, loan_amnt, month_mortgage, desired_rent } = req.body;
    dbInstance.create_property([name, description, address, city, state, zip, image_url, loan_amnt, month_mortgage, desired_rent])
        .then( () => res.status(200).send())
        .catch(err => {
            console.error('Error when creating property.');
            res.send(err);
        });
});

module.exports = wizardRouter;
