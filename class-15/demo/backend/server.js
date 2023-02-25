'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const verifyUser = require('./authorize');
const bookHandler = require('./bookHandler');


const app = express();
app.use(cors());
app.use(express.json());
app.use(verifyUser);

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Mongoose is connected');
})


app.get('/', (req,res) => response.send('default route working'))

app.get('/books', bookHandler.getBooks);
app.post('/books', bookHandler.postBooks);
app.put('/books/:id', bookHandler.putBooks);
app.delete('/books/:id', bookHandler.deleteBooks);

app.use((err, req, res, next)=> res.status(500).send(err.message));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
