require("dotenv").config();
var keys = require("./keys.js");
// var axios = require("axios");
// var moment = require("moment");
var Concert = require("./concert");
var concert = new Concert();


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