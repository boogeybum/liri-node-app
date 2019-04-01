require("dotenv").config();
var keys = require("./keys.js");
// var axios = require("axios");
// var moment = require("moment");
var Concert = require("./concert.js");
var concert = new Concert();
// var Spotify = require("./spot.js");
// var spotify = new Spoti`fy(keys);
var Movie = require("./movie.js");
var movie = new Movie();

// to access spotify keys
// var spotify = new Spotify(keys.spotify);

// grab search command line argument
var search = process.argv[2];
// join remaining arguments to deal with spaces
var term = process.argv.slice(3).join(" ");

//default if no search term provided
if (!search) {
    search = "concert-this";
}

if (search === "concert-this") {
    console.log("Searching for concert");
    concert.findConcert(term);
}

if (search === "spotify-this-song") {
    console.log("Searching Spotify");
    spotify.findSong(term);
}

if (search === "movie-this") {
    console.log("Searching Omdb");
    movie.findMovie(term);
}

