// Displays all friends
app.get("/api/friends", function (req, res) {
    return res.json(characters);
});

//Grabs user input data and scores, posts to friendsCache array in friends.js-->
$("#submit").on("click", function (event) {
    event.preventDefault();
    var newFriend = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]
    };

    //sends to friends.js for storage
    $.post("/api/friends", newFriend)
        .then(function (data) {
            console.log("survey.html", data);
            alert("Adding friend...");
        });
});



