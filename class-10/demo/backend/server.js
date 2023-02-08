'use strict'

const express = require('express');
require('dotenv').config();

const cors = require('cors');
const getRecipes = require('./recipes');
// const data = require('./staticData.json');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/recipes', getRecipes);


app.listen(PORT, () => console.log(`listening on ${PORT}`));
