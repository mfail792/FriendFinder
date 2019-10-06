var friends = require("/api/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
}

    .post(function (req, res) {
        res.send(userData);
    })

//Need POST route here to handle incoming survey results and compatability logic.

//loop through friends

//math (NEW USER INPUTS DATA AND ASNWERS THE QUESTION.  FROM THERE THE INFO IS STORED IN AN)

//store result

//end of loop, array of all results, pick the highest as best match

//return that person




