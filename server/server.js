const express = require("express");
const cors = require("cors");
const path = require("path"); // Import the path module

// Include routes
const authRoute = require("./routes/auth.routes");
const addFriendRoute = require("./routes/friend.route");
const gamesRoute = require("./routes/games.route");

const app = express(); // Create app

// Some things express uses
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/friends", addFriendRoute);
app.use("/api/games", gamesRoute);


// Serve the static files from the React app
const clientBuildPath = path.join(__dirname, "..", "build");
app.use(express.static(clientBuildPath));

// Handle other routes and send the React app's HTML file
app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

// Database connection and server start
const port = process.env.PORT || 3000;

const mongoose = require("mongoose");
const { User, Friend, Game } = require("./chessSchema.js");

const mongoURI =
  process.env.MONGODB_URI || "mongodb+srv://Srignan:BurntSeaweed49@mernchessapp.mdabnjm.mongodb.net";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async (client) => {
    console.log("Connected to MongoDB");
    // Start your application or perform database operations here
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });

module.exports = { app };
