const next = require('next');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
// const express           = require('./server/index')
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(3000, err => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000');
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
