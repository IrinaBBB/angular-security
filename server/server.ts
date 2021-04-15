import { readAllLessons } from './read-all-lessons.route';

const fs = require('fs');
const http = require('http');
const express = require('express');
import { Application } from 'express';
import { createUser } from './create-user.route';
const cors = require('cors');

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());

// REST API
app.route('/api/lessons').get(readAllLessons);
app.route('/api/signup').post(createUser);
// launch an HTTP Server
const httpServer = app.listen(9000, () => {
    console.log('HTTP Server running at http://localhost:9000');
});
