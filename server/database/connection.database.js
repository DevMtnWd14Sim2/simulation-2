const { username, password, name } = require('../config/keys.config');

const dbUsername = process.env.DATABASE_USERNAME || username;
const dbPassword = process.env.DATABASE_PASSWORD || password;
const dbName = process.env.DATABASE_NAME || name;

const connectionString = `postgres://${dbUsername}:${dbPassword}@ec2-23-23-248-247.compute-1.amazonaws.com:5432/${dbName}?ssl=true`;

module.exports = connectionString;