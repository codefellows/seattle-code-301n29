'use strict'
const axios = require('axios');
const cache = require('./cache');

function getRecipes(request, response) {
  const ingredient = request.query.ingredient;
  const url = `http://api.edamam.com/api/recipes/v2?app_id=${process.env.FOOD_APP_ID}&app_key=${process.env.FOOD_APP_KEY}&q=${ingredient}&type=public`;

  const key = 'recipe ' + ingredient;

  if(cache[key] && (Date.now() - cache[key].timestamp < 120000)){
    console.log('cache hit - send cached data back')
    console.log(Date.now());
    response.status(200).send(cache[key].data)
  }
  else{
    console.log('cache miss - make new request to API and cache data')
    axios
    .get(url)
    .then(res => {
      const recipeArr = res.data.hits.map(recipe => new Recipe(recipe.recipe));
      cache[key] = {};
      cache[key].timestamp = Date.now();
      cache[key].data = recipeArr; 
      response.status(200).send(recipeArr);
    })
    .catch(err => {
      response.status(500).send('error', err);
    })
  }


  // axios
  //   .get(url)
  //   .then(res => {
  //     const recipeArr = res.data.hits.map(recipe => new Recipe(recipe.recipe));
  //     response.status(200).send(recipeArr);
  //   })
  //   .catch(err => {
  //     response.status(500).send('error', err);
  //   })
}

class Recipe {
  constructor(recipe) {
    this.uri = recipe.uri;
    this.label = recipe.label;
    this.image_url = recipe.image;
    this.ingredients = recipe.ingredientLines;
    this.totalTime = recipe.totalTime;
  }
}

module.exports = getRecipes;