// 1. Load the packages
require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');

// 2. Set up the app, the port, and the database client
const app = express();
const port = 3001;
const client = new MongoClient(process.env.MONGO_URI);

// 3. Make the one route: GET /
app.get('/', async (req, res) => {
  try {
    await client.connect();
    res.json({ message: 'Successfully connected to the database!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to connect to the database.' });
  }
});

// 4. Start the server
app.listen(port, () => {
  console.log('Server running on port ' + port);
});
