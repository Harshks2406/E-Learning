"use strict";

var express = require('express');

var hbs = require('hbs');

var path = require('path');

var port = process.env.PORT || 5656;
var app = express();
var static_path = path.join(__dirname, './public');
var templatepath = path.join(__dirname, 'public/templates/views');
var partialpath = path.join(__dirname, 'public/templates/partials');
app.set('view engine', 'hbs');
app.set('views', templatepath);
hbs.registerPartials(partialpath);
app.use(express["static"](static_path));
app.get("/", function (req, res) {
  res.send('index');
});
app.get('/courses', function (req, res) {
  res.send('courses');
});
app.listen(port, function () {
  console.log("Server started on http://localhost:".concat(port));
});