var express = require('express');

//adding variables here for apiRoutes and htmlRoutes for routing identifiers
var apiRoutes = require('./app/routing/apiRoutes')
var htmlRoutes = require('./app/routing/htmlRoutes')

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//adding two functions here to CALL the api and html routes
apiRoutes(app);
htmlRoutes(app);


//Successful
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


//LEFT TO DO:   Fix link to API friends page | Heroku site | README