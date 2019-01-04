// Initiates connection to MySQL 

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, empty string is password
var sequelize = new Sequelize("reservation", "root", "", {
    host: "localhost",
    port: 8080,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// Exports connection for other files to use
module.exports = sequelize;
