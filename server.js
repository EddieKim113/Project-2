// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Static directory
app.use(express.static("public"));

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes")(app);

// sync the models with our db
db.sequelize.sync({ force: true }).then(function() {
    
    app.listen(PORT, function() {
        console.log("Express server listening on port " + PORT);
    });
});