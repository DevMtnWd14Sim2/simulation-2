const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

function decorate(app) {

    app.use(bodyParser.json());
    app.use(helmet());
    app.use(cors());
    app.use(session({
        secret: 'Fly you fools',
        resave: false,
        saveUninitialized: true
    }));
    app.use(express.static('./build'));
}

module.exports = decorate;