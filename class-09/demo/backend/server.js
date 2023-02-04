'use strict'

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;

const getJobs = require('./lib/jobs')

app.get('/', () => 'Welcome to my server');

app.get('/jobs', getJobs);


app.use((error, req, res, next) => res.status(500).send(`server error ${error}`));

app.listen(PORT, () => console.log(`listening on ${PORT}`));