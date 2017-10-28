const massive = require('massive');
const connectionString = require('./connection.database');

let db;

massive(connectionString)
    .then(dbInstance => db = dbInstance)
    .catch(err => {throw Error('There was an error with massive!')});

function getDb() {

    if (!db) {
        console.Error('We haven\'t connected to the database yet!')
    }

    return db;
}

module.exports = getDb;