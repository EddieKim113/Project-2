// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlbars", exphbs({ defaultLayout: "index" }));
app.set("view engine", "handlbars");

// Static directory
app.use(express.static("app/public"));

// Require dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;


// Routes
// =============================================================
require("./app/routes/apiRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
