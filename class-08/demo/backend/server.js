'use strict'

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (req,res) =>{
  res.send("Hey your server is up and Running");
});

app.get('/photos', getPhotos);

async function getPhotos(req,res,next){
  let searchQuery = req.query.searchQuery;

  let url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${searchQuery}`

  try{
    const photoResponse = await axios.get(url);
    console.log(photoResponse.data);
    let formattedData = photoResponse.data.results.map(obj => new Photo(obj));
    res.status(200).send(formattedData);
  }
  catch(error){
    res.status(500).send('Server Error');
  }
}

class Photo{
  constructor(obj){
    this.img_url = obj.urls.regular;
    this.author = obj.user.name;
    this.authorLink = obj.user.links.html
  }
}


app.listen(PORT, ()=> console.log(`listening on ${PORT}`));