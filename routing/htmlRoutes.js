//Routes


app.get("/home", function (req, res) {
    res.send("Welcome to FriendFinder!");
});



app.get("/survey", function (req, res) {
    res.send("Survey Page!")
});


