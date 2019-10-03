var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

//Setting up express app for parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/api/friends", function (req, res) {
    return res.json(friends);
});


// Create New Friends - takes in JSON input
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var addFriend = req.body;

    // Using a RegEx Pattern to remove spaces from addFriend
    addFriend.routeName = addFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(addFriend);

    characters.push(addFriend);

    res.json(addFriend);
});

