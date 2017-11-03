const express = require('express');
const getDb = require('../database/bootstrap.database');
const { passport } = require('../auth/local.auth');
// const createHash = require('../utils/hash.utils');
const authRouter = express.Router();

authRouter.post('/login', passport.authenticate('login'), (req, res) => {
    res.send({message: 'Login was successful!'});
});

authRouter.post('/register', (req, res) => {
    const dbInstance = getDb();
    const { username, password } = req.body;
    dbInstance.users.findOne({username})
    .then(user => {
        if (user) {
            console.error('This username already exists.');
            return '';
        }
        else {
            dbInstance.register_user([username, password])
                .then( () => res.status(200).send())
                .catch(err => {
                    console.error('Error registering user.');
                    res.send(err);
                });
        }
    })
});

module.exports = authRouter;
