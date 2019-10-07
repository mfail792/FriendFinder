//a POST routes /api/friends - this handles incoming survey results and compatability logic
//Load Data
var friendList = require('../data/friends.js');

module.exports = function (app) {
    //a GET route that displays JSON of all possible friends
    app.get('/api/friends', function (req, res) {
        return res.json(friendList.friends);
    });

    app.post('/api/friends', function (req, res) {
        //grabs the new friend's scores to compare with friends in friendCache array
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCache = 0;
        var bestMatch = 0;

        //runs through all current friends in list, establishes totalDifference variable for storage
        for (var i = 0; i < friendCache.length; i++) {
            var totalDifference = 0;
            //run through scores to compare friends
            for (var j = 0; j < newFriendScores.length; j++) {
                totalDifference += (Math.abs(parseInt(friendCache[i].scores[j]) - parseInt(newFriendScores[j])));
            }

            //push results into scoresArray
            scoresArray.push(totalDifference);
        }

        //after comparing all friends, locates best match
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }

        //return bestMatch data
        var bestBud = friendCache[bestMatch];
        res.json(bestBud);

        //pushes new entry into the friendCache array
        friendCache.push(req.body);
    });
};

//test