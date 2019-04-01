var axios = require("axios");
var fs = require("fs");

var Movie = function() {
    // divider to space between searches
    var divider = "\n--------------------------------------\n\n";

    this.findMovie = function(movieTitle) {
        var URL = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy";

        axios.get(URL).then(function(response) {
            var jsonData = response.data;

            var movieData = [
                "Title: " + jsonData.Title,
                "Release Year: " + jsonData.Year,
                "IMDB Rating: " + jsonData.imdbRating,
                "Rotten Tomatoes: " + jsonData.Ratings[1].Value,
                "Country: " + jsonData.Country,
                "Language: " + jsonData.Language,
                "Plot: " + jsonData.Plot,
                "Actors: " + jsonData.Actors
            ].join("\n\n");

            fs.appendFile("log.txt", movieData + divider, function(err) {
                if (err) throw err;
                console.log(response);
            });
        });

    };
};

module.exports = Movie;