const mongoose = require('mongoose');
const { User, Friend, Game } = require('./chessSchema');

const mongoURI = 'mongodb+srv://Srignan:BurntSeaweed49@mernchessapp.mdabnjm.mongodb.net/ChessGameApp';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your application or perform database operations here
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });
