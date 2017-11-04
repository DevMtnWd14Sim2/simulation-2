const chalk = require('chalk');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const getDb = require('../database/bootstrap.database');

passport.use('login', new Strategy(
    (username, password, done) => {
        const db = getDb();
        db.users
            .findOne({username})
            .then(user => {
                if (!user) {
                    console.error('That username does not exist');
                    return done({message: 'That username does not exist.'});
                }
                if (user.password !== password) {
                    console.error('That password is incorrect.');
                    return done({message: 'That password is incorrect.'});
                }
                console.log(chalk.green('Login was successful!'));
                return done(null, user);
            })
            .catch(err => {
                console.error('Error with login.');
                return done(err, false);
            });
    }
));

passport.serializeUser((user, done) => {
    return done(null, user.id);
});

passport.deserializeUser((user, done) => {
    const db = getDb();
    db.users
        .findOne({id})
        .then(user => {
            return done(null, user);
        })
        .catch(err => {
            console.error('Error in deserializing user.');
            return done({message: 'Error in deserializing user.'});
        });
});

module.exports = {
    passport
}