const chalk = require('chalk');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const createHash = require('../utils/hash.utils');

passport.use('login', new Strategy(
    (username, password, done) => {
        User.findByUsername( username, (err, user) => {
            if (err) {
                console.error(`Error in login: ${err}.`);
                return done(err);
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
            return done(null, user);
        });
    }
));

passport.use('register', new Strategy(
    (username, password, done) => {
        User.findByUsername( username, (err, user) => {
            if (err) {
                console.error(`Error in registration: ${err}.`);
                return done(err);
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
                    return done(null, newUser);
                })
            }
        })
    }
));

passport.serializeUser((user, done) => {
    return done(null, user.id);
});

passport.deserializeUser((user, done) => {
    User.findById(id, (err, user) => {
        if (err) {
            console.error(`Error in deserializing user: ${err}.`);
            return done(err);
        }
        return done(null, user);
    });
});
