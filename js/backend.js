// Starts a simple express server upon startup. This server then handles all the backend communication b/w the GUI, web APIs, and local database.
const express = require("express");

console.log("server_start")
var backend = express();

