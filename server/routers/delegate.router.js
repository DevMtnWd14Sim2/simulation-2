const express = require('express');
const authRouter = require('./auth.router');
const dashboardRouter = require('./dashboard.router');
const wizardRouter = require('./wizard.router');

function delegate(app) {
    app.use(express.static(process.env.NODE_ENV == 'prod' ? './build' : __dirname + '../../build'));

    app.use('/api/auth', authRouter);
    app.use('/api/dashboard', dashboardRouter);
    app.use('/api/wizard', wizardRouter);

    app.all('*', (req, res) => {
        res.status(404).send({message: 'Cannot access any resource at ' + req.originalUrl});
    });
    
    return app;
}

module.exports = delegate;
