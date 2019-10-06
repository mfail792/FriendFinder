var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Successful
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


//LEFT TO DO:   Fix link to API friends page | Heroku site | README