'use strict'

const mongoose = require('mongoose');
require('dotenv').config();

// Making Connection to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URL);

// Bringing in our Model
const Dog = require('../models/dog');

// Function seeds data into our database
async function seed() {

  //First way to save to database using .save, 
  // Required to create a new model then run save() to save to database
  const myDog = new Dog({
    name: 'Solo',
    color: 'Red',
    longTail: true,
    location: 'Hoth'
  })
  await myDog.save()
    .then(response => console.log('Saved Solo to Database'))
    .catch(err => console.error(err));

  // Alternate method .create()
  await Dog.create({
    name: 'Luna',
    color: 'Blue',
    longTail: true,
    location: 'Tacoma'
  })
  .then(response => console.log('Saved Luna to Database'))
  .catch(err => console.error(err));

  
  // Disconnecting from Database
  mongoose.disconnect();
}

// Runs function when file is ran with *node seed.js*
seed();