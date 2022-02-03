"use strict";
exports.__esModule = true;
var express = require('express');
var cors = require('cors');
var app = express();
var auth = require('express-openid-connect').auth;
var port = 3000;
app.get('/', function (req, res) {
    res.json("Hello World");
});
app.listen(3000, function () { return console.log("Listening on port ".concat(port)); });
var config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: 'http://localhost:3000',
    clientID: '6I2ePLioTkFLHjWBFpNv0h372l6ZywnX',
    issuerBaseURL: 'https://dev-y4mz30ly.us.auth0.com',
    secret: '374eb7bb9b0e180fe0f578258f989f27724e537d27a569f335352e239300d3c0'
};
app.use(auth(config));
app.get('/', function (req, res) {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
