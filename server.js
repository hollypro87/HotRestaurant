// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
        routeName: "wesley",
        name: "Wesley",
        phoneNumber: "4518526413",
        email: "wslifer@aol.com",
    },
    {
        routeName: "james",
        name: "James",
        phoneNumber: "5127846243",
        email: "jvanslyke@aol.com",
    },
    {
        routeName: "holly",
        name: "Holly",
        phoneNumber: "7085416814",
        email: "hpro87@hotmail.com",
    },
]