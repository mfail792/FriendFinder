var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

//Setting up express app for parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  