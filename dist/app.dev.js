"use strict";

var express = require('express');

var _require = require('express/lib/response'),
    append = _require.append;

var path = require('path');

var port = process.env.PORT || 5656;
var app = express();
var static_path = path.join(__dirname, './public');
app.use(express["static"](static_path));
app.get("/", function (req, res) {
  res.send('index');
});
app.listen(port, function () {
  console.log("Server started on http://localhost:".concat(port));
});