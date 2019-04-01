var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var fs = require("fs");

var spotify = new Spotify({
    id: "5df9e172246e4c7894dc1d457cef16dd",
    secret: "451035aa8e134ec3babf8431cb7f5b31"
  });

// Create song constructor
var ArtistInfo = function() {
    var divider = "\n--------------------------------------\n\n";

    this.findSong = function(song) {
        spotify
        .search({ type: 'track', query: song })
        .then(function(response) {
            // var jsonData = response.data;

            var artistData = [
                "Artist: " + response.artists,
                "Song: " + response.name,
                "Link: " + response.preview_url,
                "Album: " + response.album
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