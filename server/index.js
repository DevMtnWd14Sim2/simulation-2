const express = require('express');
const chalk = require('chalk');
const addMiddlewareTo = require('./middleware/decorate.middleware');

const app = express();

addMiddlewareTo(app);

const port = process.env.PORT || 8080;
app.listen(
    port,
    () => console.log(`${chalk.green('Server is listening on ')}${chalk.cyan(`port ${port}.`)}`)
);