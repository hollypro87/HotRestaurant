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
app.use(express.static("public"));

const waitList = [];
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

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "makeRes.html"));
});


app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});


app.post("/api/reservations", function (req, res) {

    var newReservations = req.body;


    newReservations.routeName = newReservations.name.replace(/\s+/g, "").toLowerCase();

    console.log(reservations);
    if (reservations.length > 5) {
        waitList.push(newReservations);
    } else { reservations.push(newReservations) };

    res.json(newReservations);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

