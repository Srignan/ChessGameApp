const mongoose = require('mongoose');
const { User, Friend, Game } = require('./chessSchema');

mongoose.connect('mongodb+srv://Srignan:BurntSeaweed49@mernchessapp.mdabnjm.mongodb.net/ChessGameApp?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });


// Sample Users
const users = [
  new User({
    userID: 0,
    email: 'test0@example.com',
    username: 'TestUser0',
    password: 'password',  // replace this with a hash in production
    rating: 1200,
  }),
  // room for more users
];

// Sample Friends
const friends = [
  new Friend({
    userID: 0,
    friendID: 1,
    username: 'TestFriend1',
    email: 'test1@example.com',
    rating: 1300,
  }),
  // room for friends
];

// Sample Games
const games = [
  new Game({
    gameID: 0,
    game: ['e4', 'e5', 'Nf3'],
    players: ['TestUser0', 'TestFriend1'],
    color: true,
    winner: null,
    whiteTime: 300,
    blackTime: 300,
  }),
  // room for more games
];

// Save the sample data to the database using promises
Promise.all([
  Promise.all(users.map(user => user.save())),
  Promise.all(friends.map(friend => friend.save())),
  Promise.all(games.map(game => game.save()))
])
  .then(() => {
    console.log('Sample data inserted successfully.');
    exit();
  })
  .catch(error => {
    console.error('Error inserting sample data:', error);
    exit();
  });

function exit() {
  mongoose.disconnect();
}
