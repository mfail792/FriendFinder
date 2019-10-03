var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Friend Finder (DATA)
// =============================================================
var friendCache = [
  {
    routeName: "friends",
    name: "Bork",
    species: "Human Male",
    age: 42,
    talents: "Can whistle dixie-land delight"
  },
  {
    routeName: "friends",
    name: "Darth Maul",
    species: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },

  //need to add more friends
  {
    routeName: "friends",
    name: "Obi Wan Kenobi",
    species: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }
];

