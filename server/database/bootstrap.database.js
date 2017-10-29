const massive = require('massive');
const connectionString = require('./connection.database');

let db;

massive(connectionString)
    .then(dbInstance => db = dbInstance)
    .catch(err => {
        console.error('There was an error with massive.');
        throw err;
    });

function getDb() {
    if (!db) {
        console.error('We haven\'t connected to the database yet!');
    }
    return db;
}

module.exports = getDb;
