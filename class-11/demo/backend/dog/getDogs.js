'use strict'

// Model contains functionality to communicate with database
const Dog = require('../models/dog');

function getDogs(req, res, next){
  let queryObject = {};
  // empty object returns all 
  Dog.find(queryObject)
  .then(data => res.status(200).send(data))
  .catch(err => console.error(err));
}

module.exports = getDogs;