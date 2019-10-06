var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.get('*', function (req, res) {
    res.render('home.html');
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});



// app.get("/survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "./survey.html"));
// });

// // Displays all characters
// app.get("/api/friends", function (req, res) {
//     return res.json(friendCache);
// });

// // Displays a single character, or returns false
// app.get("/api/friends/:friendCache", function (req, res) {
//     var chosen = req.params.friendCache;

//     console.log(chosen);

// });
