//Routes
var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Basic routes to home.html and survey.html
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });


  
  
  





