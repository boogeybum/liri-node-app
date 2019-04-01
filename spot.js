var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var fs = require("fs");


// spotify keys are linked 
var spotify = new Spotify(keys);

// Create song constructor
var ArtistInfo = function() {
    var divider = "\n--------------------------------------\n\n";

    this.findSong = function(song) {
        spotify
        .search({ type: 'track', query: song })
        .then(function(response) {
            var jsonData = response;

            var artistData = [
                "Artist: " + jsonData.artists,
                "Song: " + jsonData.name,
                "Link: " + jsonData.preview_url,
                "Album: " + jsonData.album
            ].join("\n\n");
            console.log("Searching for " + song);
          console.log(artistData);

          // append search results to a log.txt file
          fs.appendFile("log.txt", artistData + divider, function(err) {
            if (err) throw err;
        });
        })
        .catch(function(err) {
          console.log(err);
        });
    }
};



 
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
 
// console.log(data); 
// });

// spo
module.exports = ArtistInfo;