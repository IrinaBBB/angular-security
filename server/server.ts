import { readAllLessons } from './read-all-lessons.route';

const fs = require('fs');
const http = require('http');
const express = require('express');
import { Application } from 'express';
import { createUser } from './create-user.route';
import { getUser } from './get-user.route';
const cors = require('cors');
const cookieParser = require('cookie-parser');
const https = require('https');
const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

// REST API
app.route('/api/lessons').get(readAllLessons);
app.route('/api/signup').post(createUser);
app.route('/api/user').get(getUser);
app.route('/api/logout').post(getUser);

const httpsServer = https.createServer(
    {
        key: fs.readFileSync('server.key'),
        cert: fs.readFileSync('server.crt'),
    },
    app
);

httpsServer.listen(9000, () =>
    console.log('HTTPS Secure Server running at https://localhost:9000')
);
// // launch an HTTP Server
// const httpServer = app.listen(9000, () => {
//     console.log('HTTP Server running at http://localhost:9000');
// });
