require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");

console.log(keys);

// to access spotify keys
var spotify = new Spotify(keys.spotify);

