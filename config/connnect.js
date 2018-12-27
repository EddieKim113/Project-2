// Initiates connection to MySQL 

// Require mysql
var mysql = require("mysql");

// Connection information
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "hookah_db"
});

// Connect to the database
connection.connect(function(err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connection as id " + connection.threadId);
});

module.exports = connection;

