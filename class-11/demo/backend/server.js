'use strict'

const express = require('express');
require('dotenv').config();
const cors = require('cors');
//Bringing in Mongoose
const mongoose = require('mongoose');
const getDogs = require('./dog/getDogs')

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

// Establishing connection with atlas DB with URL
mongoose.connect(process.env.MONGODB_URL);

// Assigning connection to variable to easily access mongoose connection methods
const db = mongoose.connection;

// Listener for any errors, will print out error
db.on('error', console.error.bind(console, 'connection error'));
// Runs on 'open' will Console log connected
db.once('open', () => console.log('Mongoose is connected'));


// Default Route for server checking
app.get('/', (req,res) => res.status(200).send('Default Route Working'));

// Route that runs our getDogs function that was imported in
app.get('/dogs', getDogs);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));