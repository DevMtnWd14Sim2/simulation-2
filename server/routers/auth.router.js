const express = require('express');
const passport = require('passport');
const authRouter = express.Router();

authRouter.post('/login',
    passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true,
    })
);

authRouter.post('/register',
    passport.authenticate('register', {
        successRedirect: '/',
        failureRedirect: '/register',
        failureFlash: true,
    })
);

module.exports = authRouter;
