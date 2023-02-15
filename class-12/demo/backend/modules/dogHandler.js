'use strict'

// Model contains functionality to communicate with database
const Dog = require('../models/dog');

const dogHandler = {};

dogHandler.getDogs = function(req, res, next){
  let queryObject = {};
  // empty object returns all 
  Dog.find(queryObject)
  .then(data => res.status(200).send(data))
  .catch(err => console.error(err));
}

dogHandler.postDog = function(req, res, next){
  // storing data in variable
  const data = req.body;
  Dog.create(data)
    .then(createdDog => res.status(200).send(createdDog))
    .catch(err => next(err))
}

dogHandler.deleteDog = function(req, res, next){
  // grabs id from parameter slotted after endpoint
  const id = req.params.id;
  Dog.findByIdAndDelete(id)
    .then(deletedDog => res.status(200).send(deletedDog))
    .catch(err => next(err))
}

module.exports = dogHandler;