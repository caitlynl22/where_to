const port = 5000;

const express = require('express')
require('dotenv').config()
const axios = require('axios')
const app = express()
const cors = require('cors')
app.use(cors())
const Amadeus = require('amadeus');
const amadeus = new Amadeus();

// listening for port 5000
app.listen(5000, () => console.log(`Server is running on ${port}` ))

// API request
app.get('/', (req,res)=>{
  amadeus.shopping.flightDestinations.get({
    origin : req.params.origin,
    maxPrice: req.params.maxPrice,
    viewBy: "country",
  }).then(function(response){
    res.json(response.data);
  }).catch(function (error) {
    console.error(error);
  });
});
