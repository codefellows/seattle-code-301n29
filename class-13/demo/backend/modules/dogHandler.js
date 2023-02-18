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

dogHandler.putDog = function(req, res, next){
  const id = req.params.id;
  // grabbing json data from request body
  const data = req.body;
  // new - returns updated doc instead of old
  // overwrite - overwrites data completely avoiding unwanted side effects
  Dog.findByIdAndUpdate(id, data, {new: true, overwrite: true})
    .then(updatedDog => res.status(200).send(updatedDog))
    .catch(err => next(err))
}

module.exports = dogHandler;