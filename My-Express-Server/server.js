//jshint esversion: 6

const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("Hello!");
});

app.get("/about", function(req, res) {
  res.send("My name is Aditya and I love coffee and code.");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at aditya@gmail.com");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
