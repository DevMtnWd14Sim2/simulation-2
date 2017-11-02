const express = require('express');
const authRouter = require('./auth.router');
const dashboardRouter = require('./dashboard.router');
const wizardRouter = require('./wizard.router');

function delegate(app) {
    app.use(express.static('./build'));

    app.use('/api/auth', authRouter);
    app.use('/api/dashboard', dashboardRouter);
    app.use('/api/wizard', wizardRouter);

    return app;
}

module.exports = delegate;
