// setup packages
var express = require("express");
var path = require("path");

// define the server
var app = express();
var PORT = process.env.PORT || 3000;

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes:

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

