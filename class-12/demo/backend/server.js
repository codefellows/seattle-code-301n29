'use strict'

const express = require('express');
require('dotenv').config();
const cors = require('cors');
//Bringing in Mongoose
const mongoose = require('mongoose');
const dogHandler = require('./modules/dogHandler');

const app = express();
app.use(cors());
// REQUIRED FOR req.body, will show undefined without it
app.use(express.json());

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
app.get('/dogs', dogHandler.getDogs);

// Route that posts a new dog to our database
app.post('/dogs', dogHandler.postDog);

// Route that deletes a dog by id
app.delete('/dogs/:id', dogHandler.deleteDog)

// middleware that handles errors
app.use((err, req, res, next)=> res.status(500).send(err.message));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));