const express = require('express');
const authRouter = require('./auth.router');
const dashboardRouter = require('./dashboard.router');
const wizardRouter = require('./wizard.router');

function delegate(app) {

    app.use(express.static('./build'));

    app.use('/auth', authRouter);
    app.use('/dashboard', dashboardRouter);
    app.use('/wizard', wizardRouter);

    return app;
}

module.exports = delegate;