"use strict";
exports.__esModule = true;
var express = require('express');
var cors = require('cors');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.json("Hello World");
});
app.listen(3000, function () { return console.log("Listening on port " + port); });
