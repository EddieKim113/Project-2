// Dependencies

var path = require("path");

// Routes

module.exports = function(app) {

    // Each route handling HTML page that users get sent to

    app.get("/", function(req, res) {
        console.log("landing page");
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get("/menu", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/menu.html"));
    });

    app.get("/reservation", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/reservation.html"));
    });

    app.get("/hours", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/hours.html"));
    });

    app.get("/contact", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
});

};