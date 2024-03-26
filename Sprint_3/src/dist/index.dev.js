"use strict";

/* Import dependencies */
var express = require("express");

var mysql = require("mysql2");
/* Create express instance */


var app = express();
var port = 3000; //Use the pug template engine

app.set("view engine", "pug");
app.set("views", "./views"); //Add a static files location

app.use(express["static"]("static"));
console.log(process.env.MODE_ENV);
/* Setup database connection */

var db = mysql.createConnection({
  host: process.env.DATABASE_HOST || "localhost",
  user: "user",
  password: "password",
  database: "world"
});
/* Landing route */

app.get("/", function (req, res) {
  res.render("index", {
    'title': 'My index page',
    'heading': 'POPULATION INFORMATION SYSTEM'
  });
}); // Sample API route

app.get("/ping", function (req, res) {
  res.send("pong");
}); // Returns an array of cities from the database

app.get("/cities", function (req, res) {
  db.execute("SELECT * FROM `city`", function (err, rows, fields) {
    console.log("/cities: ".concat(rows.length, " rows"));
    return res.send(rows);
  });
}); // Returns an array countries from the database

app.get("/country", function (req, res) {
  db.execute("SELECT * FROM `country`", function (err, rows, fields) {
    console.log("/country: ".concat(rows.length, " rows"));
    return res.send(rows);
  });
}); //Dynamic route example

app.get("/city/:id", function (req, res) {
  //req.params contains any parameters in the request
  //We can examine it in the console for debugging purpose
  console.log(req, res); //Retrieve the name parameter and use it in a dynamic generated 

  res.send("Id is " + req.params.id);
}); // Run server!

app.listen(port, function () {
  console.log("Server running on port ".concat(port));
});
//# sourceMappingURL=index.dev.js.map
