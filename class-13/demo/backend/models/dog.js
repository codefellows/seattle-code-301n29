'use strict' 

// Bringing in mongoose lib
const mongoose = require('mongoose');

// Deconstructing Schema out of mongoose
const {Schema} = mongoose;

// Creating new Schema that our Model with adhere to
const dogSchema = new Schema ({
  name: String,
  color: String,
  longTail: Boolean,
  location: String 
})

// Exporting Model with name and Schema
module.exports = mongoose.model('Dog', dogSchema);
