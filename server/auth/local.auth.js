const chalk = require('chalk');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const createHash = require('../utils/hash.utils');
const getDb = require('../database/bootstrap.database');

passport.use('login', new Strategy(
    (username, password, done) => {
        const db = getDb();
        db.users.findOne( username, (err, user) => {
            if (err) {
                console.error(`Error in login: ${err}.`);
                return done(err, false, {message: `Error in login: ${err}.`});
            }
            if (!user) {
                console.error('That username does not exist.');
                return done(null, false, {message: 'That username does not exist.'});
            }
            if (!user.verifyPassword(password)) {
                console.error('That password is incorrect.');
                return done(null, false, {message: 'That password is incorrect.'});
            }
            console.log(chalk.green('Login was successful!'))
            return done(null, user, {message: 'Login was successful!'});
        });
    }
));

passport.use('register', new Strategy(
    (username, password, done) => {
        const db = getDb();
        db.users.findOne( username, (err, user) => {
            if (err) {
                console.error(`Error in registration: ${err}.`);
                return done(err, false, {message: `Error in registration: ${err}.`});
            }
            if (user) {
                console.error('That username already exists.');
                return done(null, false, {message: 'That username already exists.'});
            }
            else {
                const newUser = new User();
                newUser.username = username;
                newUser.password = createHash(password);
                newUser.save(err => {
                    if (err) {
                        console.error(`Error in saving new user: ${err}.`);
                        throw err;
                    }
                    console.log(chalk.green('Registration was successful!'));
                    return done(null, newUser, {message: 'Registration was successful!'});
                })
            }
        })
    }
));

passport.serializeUser((user, done) => {
    return done(null, user.id, {message: 'User has been serialized.'});
});

passport.deserializeUser((user, done) => {
    const db = getDb();
    db.users.findOne(id, (err, user) => {
        if (err) {
            console.error(`Error in deserializing user: ${err}.`);
            return done(err, false, {message: `Error in deserializing user: ${err}.`});
        }
        return done(null, user, {message: 'User has been deserialized.'});
    });
});
