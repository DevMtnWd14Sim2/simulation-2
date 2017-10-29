const express = require('express');
const passport = require('passport');
const authRouter = express.Router();

authRouter.post('/login',
    passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
);

// add endpoint to register user?

module.exports = authRouter;