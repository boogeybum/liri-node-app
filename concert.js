var axios = require("axios");
var fs = require("fs");

//create concert constructor
var Concert = function() {
    // divider to space between searches
    var divider = "\n--------------------------------------\n\n";

    // find concert takes in the artist and returns upcoming live show venue, location and time
    this.findConcert = function(artist) {
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp&date=upcoming";

        axios.get(URL).then(function(response) {
            var jsonData = response.data;

            var concertData = [
                "Venue: " + jsonData.venue,
                "Location: " + jsonData.city + ", " + jsonData.region,
                "Time: " + jsonData.datetime
            ].join("\n\n");

            // append search results to a log.txt file
            fs.appendFile("log.txt", concertData + divider, function(err) {
                if (err) throw err;
                console.log(concertData);
            });

        });
    };
};

module.exports = Concert;