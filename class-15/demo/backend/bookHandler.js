'use strict'

const Book = require('./models/book');

const bookHandler = {};

bookHandler.getBooks = function (req, res, next){
  let queryObject  = {email: req.user.email};
  Book.find(queryObject)
    .then(data => res.status(200).send(data))
    .catch(err => next(err));
}

bookHandler.postBooks = function (req, res, next){
  Book.create({...req.body, email: req.user.email})
    .then(createdBook => res.status(200).send(createdBook))
    .catch(err => next(err));
}

bookHandler.putBooks = function (req, res, next){
  let id = req.params.id;
  Book.findByIdAndUpdate(id, req.body, {new:true, overwrite: true})
    .then(updatedBook => res.status(200).send(updatedBook))
    .catch(err => next(err));
}

bookHandler.deleteBooks = function (req, res, next){
  let id = req.params.id;
  Book.findByIdAndDelete(id)
    .then(deletedBook => res.status(200).send(deletedBook))
    .catch(err => next(err));
}

module.exports = bookHandler;