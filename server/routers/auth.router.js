const express = require('express');
const { passport } = require('../auth/local.auth');
const authRouter = express.Router();

authRouter.post('/login', passport.authenticate('login'), (req, res) => {
    res.send({message: 'Login was successful!'});
});

authRouter.post('/register',
    passport.authenticate('register', {
        successRedirect: '/',
        failureRedirect: '/register',
        failureFlash: true,
    })
);

module.exports = authRouter;
