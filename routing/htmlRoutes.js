//Routes
var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Basic routes to home.html and survey.html
app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
  
  
  





