// Initialize the express app and connect to the database
const connectToMongo = require('./db');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

connectToMongo();

// use middleware to parse the request body
app.use(express.json());

// Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })