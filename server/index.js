const port = 5001;

require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const Amadeus = require('amadeus');
const amadeus = new Amadeus();

// listening for port 5000
app.listen(5001, () => console.log(`Server is running on ${port}` ))

// API request
app.get('/', (req,res)=>{
  amadeus.shopping.flightDestinations.get({
    origin : req.query.origin,
    maxPrice: req.query.maxPrice,
    viewBy: "COUNTRY",
  }).then(function(response){
    res.json(response.data);
  }).catch(function(error) {
    res.json(error)
    console.error(error);
  });
});
