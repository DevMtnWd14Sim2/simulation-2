const express = require('express');
const chalk = require('chalk');
const addMiddlewareTo = require('./middleware/decorate.middleware');
const delegateRoutesFor = require('./routers/delegate.router');

const app = express();

addMiddlewareTo(app);
delegateRoutesFor(app);

const port = process.env.PORT || 8080;
app.listen( port, () => {
    console.log(`
        ${chalk.green('Server is listening on ')}
        ${chalk.cyan(`port ${port}.`)}
    `);
});
