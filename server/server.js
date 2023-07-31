const express = require("express");
const cors = require("cors");
const path = require("path"); // Import the path module
const sgMail = require("@sendgrid/mail"); // Import the SendGrid module

// Include routes
const authRoute = require("./routes/auth.routes");
const addFriendRoute = require("./routes/friend.route");
const gamesRoute = require("./routes/games.route");

const app = express(); // Create app

// Some things express uses
app.use(cors());
app.use(express.json());

// Get the SendGrid API key from the Heroku environment variables
const apiKey = process.env.SENDGRID_API_KEY;

// Check if the API key is available
if (!apiKey) {
  console.error("SendGrid API key not found. Make sure you set the SENDGRID_API_KEY environment variable.");
} else {
  // Set the API key if available
  sgMail.setApiKey(apiKey);
  console.log("SendGrid APIP key successfully acquired.");
}

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
  process.env.MONGODB_URI;

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
