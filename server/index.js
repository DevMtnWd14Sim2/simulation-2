const express = require('express');
const chalk = require('chalk');

const app = express();

const port = process.env.PORT || 8080;
app.listen(
    port,
    () => console.log(`${chalk.green('Server is listening on ')}${chalk.cyan(`port ${port}.`)}`)
);