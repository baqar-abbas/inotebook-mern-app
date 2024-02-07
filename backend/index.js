// Initialize the express app and connect to the database
const connectToMongo = require('./db');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

connectToMongo();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })