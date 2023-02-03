'use strict'

// .env library access
require('dotenv').config();

//express server library
const express = require('express');

// initializing the express library
const app = express();

const cors = require('cors');

// Anyone can make a request to our server
app.use(cors())

const PORT = process.env.PORT || 3002;

const lists = require('./data/shopping-list.json');

// default home route
app.get('/', (request, response) => {
  response.send('Hey your default endpoint is working');
});

// console.logs will get logged in terminal and not browser
app.get('/bananas', (req, res) => {
  console.log("Hey Im here");
  res.send('This is bananas')
})

//sends back whole list 
app.get('/list', (req, res) => {
  res.send(lists);
})

// sends back list based on query parameter 'type'
app.get('/listType', (req, res, next) => {
  try {
    console.log(req.query);
    let type = req.query.type;
    let myList = new List(type);
    let formattedList = myList.getItems();
    res.status(200).send(formattedList);
  }
  catch (error) {
    next(error)
  }
})

class List {
  constructor(type) {
    let newList = lists.lists.find(list => list.listName === type);
    // Deconstructing
    // let {items} = lists.lists.find(list => list.listName === type);
    this.items = newList.items;
  }

  getItems() {
    return this.items.map(item => {
      return { name: item.name, description: item.description }
    })
  }
}

app.use((error, request, response, next) => {
  console.log(error);
  response.status(500).send(error)
})

// turns the server on to the port specified
app.listen(PORT, () => console.log(`listening on ${PORT}`))